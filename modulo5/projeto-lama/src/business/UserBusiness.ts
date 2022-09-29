import UserDatabase from "../database/UserDatabase";
import FieldsEmptyError from "../errors/FieldsEmptyError";
import {
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupInputDTO,
  User,
  USER_ROLES,
} from "../models/UserModel";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new FieldsEmptyError();
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) ||
      typeof email !== "string"
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido");
    }
    if (password.length < 6) {
      throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres");
    }

    const checkEmail = await this.userDatabase.checkEmail(email);
    if (checkEmail) {
      throw new Error("E-mail já cadastrado");
    }

    const id = this.idGenerator.generateId();
    const passwordHash = await this.hashManager.hash(password);

    const newUser = new User(id, name, email, passwordHash, USER_ROLES.ADMIN);
    await this.userDatabase.saveUser(newUser);

    const payload: ITokenPayload = {
      id: newUser.getId(),
      role: newUser.getRole(),
    };
    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Cadastro realizado com sucesso!",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new FieldsEmptyError();
    }

    if (typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido");
    }

    if (password.length < 6) {
      throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres");
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new Error("Parâmetro 'email' inválido");
    }

    const checkEmail = await this.userDatabase.checkEmail(email);
    if (!checkEmail) {
      throw new Error("E-mail não cadastrado");
    }

    const user = new User(
      checkEmail.id,
      checkEmail.name,
      checkEmail.email,
      checkEmail.password,
      checkEmail.role
    );

    const checkPassword = await this.hashManager.compare(
      password,
      user.getPassword()
    );
    if (!checkPassword) {
      throw new Error("Senha incorreta");
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };
    const token = this.authenticator.generateToken(payload);

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  };
}
export default UserBusiness;

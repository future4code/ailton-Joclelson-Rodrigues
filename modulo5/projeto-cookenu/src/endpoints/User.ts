import { Request, Response } from "express";
import UserData from "../data/UserData";
import FieldsEmptyError from "../error/FieldsEmptyError";
import UserCredentialError from "../error/UserCredentialError";
import UserRegisteredError from "../error/UserRegisteredError";
import UserUnRegisteredError from "../error/UserUnRegisteredError";
import UserModel from "../model/UserModel";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class User {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password || password.length < 6) {
        throw new FieldsEmptyError();
      }

      const useData = new UserData();
      const checkEmail = await useData.checkEmail(email);
      if (checkEmail) {
        throw new UserRegisteredError();
      }

      const id = new IdGenerator().generateId();

      const hash = new HashManager();
      const hashPassword = await hash.hash(password);

      const newUser = new UserModel(id, name, email, hashPassword);
      const saveUser = await useData.saveUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken(newUser.getID());

      res.status(201).send({ message: saveUser, token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || email.indexOf("@") === -1) {
        throw new UserCredentialError();
      }

      if (!password || password.length < 6) {
        throw new UserCredentialError();
      }

      const userData = new UserData();
      const checkEmail = await userData.checkEmail(email);
      if (!checkEmail) {
        throw new UserUnRegisteredError();
      }

      const hashVerify = await new HashManager().compare(
        password,
        checkEmail.getPassword()
      );

      if (!hashVerify) {
        throw new UserCredentialError();
      }

      const token = new Authenticator().generateToken(checkEmail.getID());

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async profile(req: Request, res: Response) {
    try {
      const auth = req.headers.authorization as string;

      const authenticator = new Authenticator().verifyToken(auth) as any;

      const useData = new UserData();
      const profileData = await useData.getProfile(authenticator.id);

      res.status(200).send(profileData);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
export default User;

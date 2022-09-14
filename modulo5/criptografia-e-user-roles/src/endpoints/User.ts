import { Request, Response } from "express";
import UserData from "../data/UserData";
import EmailNotError from "../error/EmailNotError";
import EmailUsedError from "../error/EmailUsedError";
import EmptyFieldsError from "../error/EmptyFieldsError";
import IncorrectDataError from "../error/IncorrectDataError";
import TypeUserError from "../error/TypeUserError";
import UnauthorizedUserError from "../error/UnauthorizedUserError";
import UserModel from "../model/UserModel";
import Authenticator, { typeUser } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class User {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;
      if (!name || !email || !password || !role) {
        throw new EmptyFieldsError();
      }

      if (
        role.toUpperCase() !== typeUser.ADMIN &&
        role.toUpperCase() !== typeUser.NORMAL
      ) {
        throw new TypeUserError();
      }

      const userData = new UserData();
      const checkEmail = await userData.checkEmail(email);
      if (checkEmail) {
        throw new EmailUsedError();
      }

      const id = new IdGenerator().generateId();

      const hashPassword = await new HashManager().hash(password);

      const userModel = new UserModel(id, name, email, hashPassword, role);

      const result = await userData.createUser(userModel);

      const token = new Authenticator().generateToken({ id, role });

      res.status(201).send({ message: result, token: token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || email.indexOf("@") === -1) {
        throw new EmptyFieldsError();
      }

      /* if (!password || password.length < 6) {
        throw new EmptyFieldsError();
      } */

      const userData = new UserData();
      const checkEmail = await userData.checkEmail(email);
      if (!checkEmail) {
        throw new EmailNotError();
      }

      const hashVerify = await new HashManager().compare(
        password,
        checkEmail.password
      );

      if (!hashVerify) {
        throw new IncorrectDataError();
      }

      const token = new Authenticator().generateToken({
        id: checkEmail.id,
        role: checkEmail.role,
      });

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async profile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const authenticator = new Authenticator().verifyToken(token) as any;

      if (authenticator.role !== typeUser.NORMAL) {
        throw new UnauthorizedUserError();
      }

      const userData = new UserData();
      const result = await userData.getUser(authenticator.id);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
export default User;

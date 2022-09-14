import { Request, Response } from "express";
import UserData from "../data/UserData";
import EmailNotError from "../error/EmailNotError";
import EmailUsedError from "../error/EmailUsedError";
import EmptyFieldsError from "../error/EmptyFieldsError";
import IncorrectDataError from "../error/IncorrectDataError";
import UserModel from "../model/UserModel";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

class User {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new EmptyFieldsError();
      }

      const userData = new UserData();
      const checkEmail = await userData.checkEmail(email);
      if (checkEmail) {
        throw new EmailUsedError();
      }

      const id = new IdGenerator().generateId();

      const userModel = new UserModel(id, name, email, password);

      const result = await userData.createUser(userModel);

      const token = new Authenticator().generateToken(id);

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
      if (!password || password.length < 6) {
        throw new EmptyFieldsError();
      }

      const userData = new UserData();
      const checkEmail = await userData.checkEmail(email);
      const checkPassword = await userData.checkPassword(password);
      if (!checkEmail || !checkPassword) {
        throw new EmailNotError();
      }

      if (checkEmail.email !== email || checkEmail.password !== password) {
        throw new IncorrectDataError();
      }

      const token = new Authenticator().generateToken(checkEmail.id);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async profile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const authenticator = new Authenticator().verifyToken(token) as any;

      const userData = new UserData();

      const result = await userData.getUser(authenticator);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
export default User;

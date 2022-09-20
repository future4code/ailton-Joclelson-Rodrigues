import { Request, Response } from "express";
import UserData from "../data/UserData";
import FieldsEmptyError from "../error/FieldsEmptyError";
import UnauthorizedUser from "../error/UnauthorizedUser";
import UserCredentialError from "../error/UserCredentialError";
import UserRegisteredError from "../error/UserRegisteredError";
import UserUnRegisteredError from "../error/UserUnRegisteredError";
import UserModel, { USER_ROLES } from "../model/UserModel";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class User {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role || password.length < 6) {
        throw new FieldsEmptyError();
      }

      const useData = new UserData();
      const checkEmail = await useData.checkEmail(email);
      if (checkEmail) {
        throw new UserRegisteredError();
      }

      if (
        role.toUpperCase() !== USER_ROLES.NORMAL &&
        role.toUpperCase() !== USER_ROLES.ADMIN
      ) {
        throw new Error("Invalid user type");
      }

      const id = new IdGenerator().generateId();

      const hash = new HashManager();
      const hashPassword = await hash.hash(password);

      const newUser = new UserModel(id, name, email, hashPassword, role);
      const saveUser = await useData.saveUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id: newUser.getID(),
        role: newUser.getRole(),
      });

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

      const token = new Authenticator().generateToken({
        id: checkEmail.getID(),
        role: checkEmail.getRole(),
      });

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

  public async userProfile(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const auth = req.headers.authorization as string;

      const authenticator = new Authenticator().verifyToken(auth) as any;
      if (!authenticator) {
        throw new UnauthorizedUser();
      }

      const useData = new UserData();
      const profileData = await useData.getProfile(id);

      res.status(200).send(profileData);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async follow(req: Request, res: Response) {
    try {
      const userToFollowId = req.body.userToFollowId;
      const auth = req.headers.authorization as string;

      if (!auth) {
        throw new FieldsEmptyError();
      }

      const authenticator = new Authenticator().verifyToken(auth) as any;
      if (!authenticator) {
        throw new UnauthorizedUser();
      }
      const useData = new UserData();
      const saveFollow = await useData.saveFollow(
        authenticator.id,
        userToFollowId
      );

      res.status(200).send({ message: saveFollow });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async unfollow(req: Request, res: Response) {
    try {
      const userToUnfollowId = req.body.userToUnfollowId;
      const auth = req.headers.authorization as string;

      if (!auth) {
        throw new FieldsEmptyError();
      }

      const authenticator = new Authenticator().verifyToken(auth) as any;
      if (!authenticator) {
        throw new UnauthorizedUser();
      }
      const useData = new UserData();
      const saveUnFollow = await useData.saveUnFollow(
        authenticator.id,
        userToUnfollowId
      );

      res.status(200).send({ message: saveUnFollow });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  public async feed(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new FieldsEmptyError();
      }

      const authenticator = new Authenticator().verifyToken(token) as any;
      if (!authenticator) {
        throw new UnauthorizedUser();
      }

      const userData = new UserData();
      const feed = await userData.feedData(authenticator.id);

      res.status(200).send(feed);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
export default User;

import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "../model/UserModel";

dotenv.config();

interface UserSystem {
  id: string;
  role: USER_ROLES;
}

class Authenticator {
  generateToken(typeUser: UserSystem): string {
    const token = jwt.sign(typeUser, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token, process.env.JWT_KEY as string);

    return verify;
  }
}
export default Authenticator;

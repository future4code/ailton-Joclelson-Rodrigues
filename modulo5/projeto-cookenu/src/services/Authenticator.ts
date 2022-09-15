import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/* export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
} */

/* interface UserSystem {
  id: string;
  role: typeUser;
} */

class Authenticator {
  generateToken(id: string): string {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
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

import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

interface UserSystem {
  id: string;
  role: typeUser;
}

export class Authenticator {
  generateToken(user: UserSystem): string {
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_KEY as string,
      { expiresIn: process.env.JWT_EXPIRATION_TIME }
    );
    return token;
  }

  verifyToken(token: string): UserSystem {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    return verify;
  }
}
export default Authenticator;

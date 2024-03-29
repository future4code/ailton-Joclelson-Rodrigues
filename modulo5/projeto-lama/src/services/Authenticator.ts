import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "../models/UserModel";

dotenv.config();

export interface ITokenPayload {
  id: string;
  role: USER_ROLES;
}

export class Authenticator {
  generateToken = (payload: ITokenPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });

    return token;
  };

  getTokenPayload = (token: string): ITokenPayload | null => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string);

    return payload as ITokenPayload;
  };
}

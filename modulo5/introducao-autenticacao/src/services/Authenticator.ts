import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class Authenticator {
  generateToken(id: string): string {
    const token = jwt.sign(
      {
        id: id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    );
    return token;
  }

  verifyToken(token: string) {
    const verification = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as any;

    return verification.id;
  }
}
export default Authenticator;

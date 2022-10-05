import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

class HashManager {
  async hash(password: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_ROUNDS!);
    const salt = await bcrypt.genSalt(rounds);
    const encryptedPassword = await bcrypt.hash(password, salt);

    return encryptedPassword;
  }

  async compare(password: string, hashPassword: string): Promise<boolean> {
    const hashCompare: boolean = await bcrypt.compare(password, hashPassword);
    return hashCompare;
  }
}
export default HashManager;

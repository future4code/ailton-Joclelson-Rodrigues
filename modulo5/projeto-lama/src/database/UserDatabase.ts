import { IUserDB, User } from "../models/UserModel";
import BaseDataBase from "./BaseDatabase";

class UserDatabase extends BaseDataBase {
  public static TABLE_USERS = "lama_users";

  async saveUser(user: User) {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };
    await this.getConnection().insert(userDB).into(UserDatabase.TABLE_USERS);
  }

  async checkEmail(email: string): Promise<IUserDB | undefined> {
    try {
      const result: IUserDB[] = await this.getConnection()
        .select()
        .from(UserDatabase.TABLE_USERS)
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
export default UserDatabase;

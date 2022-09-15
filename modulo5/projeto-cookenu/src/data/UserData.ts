import UserModel, { typeGetProfile } from "../model/UserModel";
import BaseDatabase from "./BaseDatabase";

class UserData extends BaseDatabase {
  async saveUser(user: UserModel): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id: user.getID(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into("lab_cookenu");
      return `User: ${user.getName()}, created successfully`;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getProfile(id: string): Promise<typeGetProfile> {
    const result = await this.getConnection()
      .select("id", "name", "email")
      .from("lab_cookenu")
      .where({ id });

    return result[0];
  }

  async checkEmail(email: string): Promise<UserModel> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from("lab_cookenu")
        .where({ email });

      return result[0] && UserModel.typeUserModel(result[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
export default UserData;

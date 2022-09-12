import UserModel from "../model/UserModel";
import BaseData from "./BaseData";

class UserData extends BaseData {
  public async createUser(user: UserModel): Promise<string> {
    await this.getConnection()
      .insert({
        id: user.getID(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into("labecommerce_users");

    return `User created successfully!`;
  }

  public async getUser(id: string) {
    const result = await this.getConnection()
      .select("id", "email")
      .from("labecommerce_users")
      .where({ id });
    return result[0];
  }

  public async checkEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("labecommerce_users")
      .where({ email });
    return result[0];
  }

  public async checkPassword(password: string) {
    const result = await this.getConnection()
      .select("*")
      .from("labecommerce_users")
      .where({ password });
    return result[0];
  }
}
export default UserData;

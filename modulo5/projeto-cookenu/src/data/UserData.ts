import convertDate from "../functions/convertDate";
import UserModel, { typeGetProfile } from "../model/UserModel";
import BaseDatabase from "./BaseDatabase";
import { typeFeed } from "../types/typeFeed";

class UserData extends BaseDatabase {
  async saveUser(user: UserModel): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id: user.getID(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole(),
        })
        .into("lab_cookenu_user");
      return `User: ${user.getName()}, created successfully`;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getProfile(id: string): Promise<typeGetProfile> {
    const result = await this.getConnection()
      .select("id", "name", "email")
      .from("lab_cookenu_user")
      .where({ id });
    const typeProfileData: typeGetProfile = {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
    };

    return typeProfileData;
  }

  async checkEmail(email: string): Promise<UserModel> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from("lab_cookenu_user")
        .where({ email });

      return result[0] && UserModel.typeUserModel(result[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async saveFollow(idSeguir: string, IdSeguido: string): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          follow_id: idSeguir,
          followed_id: IdSeguido,
        })
        .into("lab_cookenu_followers");

      return `Successfully followed!`;
    } catch (error: any) {
      if (error.sqlMessage.includes("Duplicate entry")) {
        throw new Error("You are following this user");
      }
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async saveUnFollow(idSeguir: string, IdSeguido: string): Promise<string> {
    try {
      await this.getConnection()
        .delete()
        .from("lab_cookenu_followers")
        .where({ follow_id: idSeguir })
        .andWhere({ followed_id: IdSeguido });

      return `Successfully unfollowed!`;
    } catch (error: any) {
      if (error.sqlMessage.includes("Duplicate entry")) {
        throw new Error("You are following this user");
      }
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async feedData(id: string): Promise<typeFeed> {
    const result = await this.getConnection()
      .select("lab_cookenu_recepes.*", "lab_cookenu_user.name")
      .from("lab_cookenu_followers")
      .innerJoin(
        "lab_cookenu_user",
        "lab_cookenu_followers.followed_id",
        "lab_cookenu_user.id"
      )
      .innerJoin(
        "lab_cookenu_recepes",
        "lab_cookenu_followers.followed_id",
        "lab_cookenu_recepes.id_user"
      )
      .where({ "lab_cookenu_followers.follow_id": `${id}` });

    const typeFeed: typeFeed = {
      id: result[0].id,
      title: result[0].title,
      description: result[0].preparation_mode,
      createdAt: convertDate(result[0].creation_date),
      userId: result[0].id_user,
      userName: result[0].name,
    };
    return typeFeed;
  }
}
export default UserData;

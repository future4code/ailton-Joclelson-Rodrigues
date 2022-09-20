import convertDate from "../functions/convertDate";
import RecepesModel, { typeRecepes } from "../model/RecepesModel";
import BaseDatabase from "./BaseDatabase";

class RecepesData extends BaseDatabase {
  async saveRecepe(recepe: RecepesModel): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id: recepe.getId(),
          title: recepe.getTitle(),
          preparation_mode: recepe.getPreparation(),
          creation_date: recepe.getDate(),
          id_user: recepe.getUserId(),
        })
        .into("lab_cookenu_recepes");

      return `Recepe: ${recepe.getTitle()}, created successfully`;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getRecepes(id: string): Promise<typeRecepes> {
    const result = await this.getConnection()
      .select("*")
      .from("lab_cookenu_recepes")
      .where({ id });

    const typeRecepesData: typeRecepes = {
      id: result[0].id,
      title: result[0].title,
      description: result[0].preparation_mode,
      creationDate: convertDate(result[0].creation_date),
      idUser: result[0].id_user,
    };
    return typeRecepesData;
  }

  async updateRecepe(
    id: string,
    title: string,
    description: string
  ): Promise<string> {
    await this.getConnection()
      .update({
        title,
        preparation_mode: description,
      })
      .from("lab_cookenu_recepes")
      .where({ id });
    return `Recipe updated successfully`;
  }
}
export default RecepesData;

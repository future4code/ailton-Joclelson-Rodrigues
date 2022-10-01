import Show, { IShowDB } from "../models/ShowModel";
import BaseDataBase from "./BaseDatabase";

class ShowDatabase extends BaseDataBase {
  public static TABLE_SHOW = "lama_shows";

  public saveBand = async (input: Show): Promise<string> => {
    const bandDB: IShowDB = {
      id: input.getId(),
      band: input.getBand(),
      starts_at: input.getStarts(),
    };

    await this.getConnection().insert(bandDB).into(ShowDatabase.TABLE_SHOW);

    return "Show criado com sucesso!";
  };
}
export default ShowDatabase;

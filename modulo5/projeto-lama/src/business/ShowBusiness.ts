import ShowDatabase from "../database/ShowDatabase";
import FieldsEmptyError from "../errors/FieldsEmptyError";
import UnauthorizedError from "../errors/UnauthorizedError";
import currentDate from "../functions/currentDate";
import Show, { inputCreateDTO } from "../models/ShowModel";
import { USER_ROLES } from "../models/UserModel";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public create = async (input: inputCreateDTO) => {
    const { band, startsAt, token } = input;

    if (!band || !startsAt || !token) {
      throw new FieldsEmptyError();
    }

    const checkPerm = this.authenticator.getTokenPayload(token) as any;
    if (checkPerm.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError();
    }

    const id = this.idGenerator.generateId();
    const dateDB = currentDate(startsAt);

    const newShow = new Show(id, band, dateDB);

    const response = await this.showDatabase.saveBand(newShow);

    return response;
  };
}
export default ShowBusiness;

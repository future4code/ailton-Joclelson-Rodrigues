import FieldsEmptyError from "../errors/FieldsEmptyError";
import UnauthorizedError from "../errors/unauthorizedError";
import { inputCreateDTO } from "../models/ShowModel";
import { USER_ROLES } from "../models/UserModel";
import { Authenticator } from "../services/Authenticator";

class ShowBusiness {
  constructor(private authenticator: Authenticator) {}

  public create = (input: inputCreateDTO) => {
    const { band, startsAt, token } = input;

    if (!band || !startsAt || !token) {
      throw new FieldsEmptyError();
    }

    const checkPerm = this.authenticator.getTokenPayload(token) as any;
    if (checkPerm.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError();
    }
  };
}
export default ShowBusiness;

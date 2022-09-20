import BaseError from "./BaseError";

class UnauthorizedUser extends BaseError {
  constructor() {
    super("Unauthorized user", 401);
  }
}
export default UnauthorizedUser;

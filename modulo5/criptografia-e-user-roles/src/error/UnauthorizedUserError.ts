import BaseError from "./BaseError";

class UnauthorizedUserError extends BaseError {
  constructor() {
    super("Only a normal user can access this funcionality", 401);
  }
}
export default UnauthorizedUserError;

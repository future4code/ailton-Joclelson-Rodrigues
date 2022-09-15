import BaseError from "./BaseError";

class UserCredentialError extends BaseError {
  constructor() {
    super("User credentials error, invalid email or password", 401);
  }
}
export default UserCredentialError;

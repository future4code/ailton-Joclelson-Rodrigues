import BaseError from "./BaseError";

class UserRegisteredError extends BaseError {
  constructor() {
    super("User already registered", 409);
  }
}
export default UserRegisteredError;

import BaseError from "./BaseError";

class UserUnRegisteredError extends BaseError {
  constructor() {
    super("Unregistered user, register!", 409);
  }
}
export default UserUnRegisteredError;

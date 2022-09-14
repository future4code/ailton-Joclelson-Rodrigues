import BaseError from "./BaseError";

class TypeUserError extends BaseError {
  constructor() {
    super("Invalid user type", 401);
  }
}
export default TypeUserError;

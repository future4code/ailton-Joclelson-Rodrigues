import BaseError from "./BaseError";

class IncorrectDataError extends BaseError {
  constructor() {
    super("Incorrect username or password", 404);
  }
}
export default IncorrectDataError;

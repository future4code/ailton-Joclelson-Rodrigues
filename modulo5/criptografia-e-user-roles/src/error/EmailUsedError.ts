import BaseError from "./BaseError";

class EmailUsedError extends BaseError {
  constructor() {
    super("This email is already being used", 404);
  }
}
export default EmailUsedError;

import BaseError from "./BaseError";

class EmailNotError extends BaseError {
  constructor() {
    super("User not found", 401);
  }
}
export default EmailNotError;

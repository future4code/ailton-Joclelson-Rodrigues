import BaseError from "./BaseError";

class EmptyFieldsError extends BaseError {
  constructor() {
    super("Enter data in the fields", 404);
  }
}
export default EmptyFieldsError;

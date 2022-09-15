import BaseError from "./BaseError";

class FieldsEmptyError extends BaseError {
  constructor() {
    super("input fields empty", 422);
  }
}
export default FieldsEmptyError;

import BaseError from "./BaseError";

class UnauthorizedError extends BaseError {
  constructor() {
    super("O usuário não tem permissão", 401);
  }
}
export default UnauthorizedError;

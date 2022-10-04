import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("testando erros da business", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("testando erro do método signup da UserBusiness", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "123",
      };

      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  });

  test("testando erro do método login da UserBusiness", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "banan",
      };

      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  });
});

import { PostBusiness } from "../src/business/PostBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ICreatePostInputDTO } from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("testando PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("testando erro do método createPost da PostBusiness", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock",
        content: "Teste do mock",
      };

      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("testando erro do método getPosts da PostBusiness", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock",
        content: "Teste do mock",
      };

      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });
});

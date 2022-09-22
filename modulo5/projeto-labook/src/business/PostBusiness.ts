import { PostDatabase } from "../database/PostDatabase";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ParamsError } from "../errors/ParamsError";
import { inputPostDTO, IPostDB } from "../models/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createPost = async (input: inputPostDTO) => {
    const { content, token } = input;

    if (!content || !token) {
      throw new ParamsError();
    }

    const verifyToken = this.authenticator.getTokenPayload(token) as any;
    if (!verifyToken) {
      throw new AuthorizationError();
    }

    const id = this.idGenerator.generate();

    const post: IPostDB = {
      id,
      content,
      user_id: verifyToken.id,
    };

    const response = await this.postDatabase.savePost(post);

    return response;
  };

  public getPost = async (token: string) => {
    if (!token) {
      throw new ParamsError();
    }

    const verifyToken = this.authenticator.getTokenPayload(token) as any;
    if (!verifyToken) {
      throw new AuthorizationError();
    }

    const response = await this.postDatabase.getAllPosts();

    return response;
  };
}

import { IPostDB } from "../models/Post";
import BaseDatabase from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public savePost = async (post: IPostDB): Promise<string> => {
    const postDB: IPostDB = {
      id: post.id,
      content: post.content,
      user_id: post.user_id,
    };

    await this.getConnection().insert(postDB).into(PostDatabase.TABLE_POSTS);

    return `Post criado com sucesso!`;
  };

  public getAllPosts = async () => {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_POSTS)
      .innerJoin("", "", "");
  };
}

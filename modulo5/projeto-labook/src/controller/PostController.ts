import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { inputPostDTO } from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const { content } = req.body;
      const token = req.headers.authorization as string;

      const input: inputPostDTO = {
        content,
        token,
      };

      const response = await this.postBusiness.createPost(input);

      res.status(201).send({ message: response });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  public getPost = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.postBusiness.getPost(token);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}

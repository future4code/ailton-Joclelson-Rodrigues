import { Request, Response } from "express";
import { connection } from "../data/connection";

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await connection("labecommerce_users");
    if (result.length) {
      res.status(200).send(result);
    }
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default getUsers;

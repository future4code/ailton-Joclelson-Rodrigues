import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { order, search } = req.query;

    const result: products[] = await connection("labecommerce_products")
      .where("name", "LIKE", `%${search}%`)
      .orderBy("name", `${order}`);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default getProducts;

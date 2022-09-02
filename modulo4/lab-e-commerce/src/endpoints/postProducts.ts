import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";

const postProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, image_url } = req.body;
    let id = Math.floor(Date.now() * Math.random()).toString(36);
    console.log(id);
    if (!name || !price || !image_url) {
      throw new Error("Insira dados validos");
    }
    const products: products = {
      id,
      name,
      price,
      image_url,
    };
    await connection("labecommerce_products").insert(products);
    res.status(201).send("Produto adicionado com sucesso!");
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default postProducts;

import { Request, Response } from "express";
import { connection } from "../data/connection";
import { purchase } from "../types";

const postPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, product_id, quantity } = req.body;
    let id = Math.floor(Date.now() * Math.random()).toString(36);

    if (!user_id || !product_id || !quantity) {
      throw new Error("Insira dados validos");
    }

    const price = await connection.raw(
      `SELECT price FROM labecommerce_products WHERE id = "${product_id}"`
    );

    const totalPrice = price[0][0].price * quantity;

    const products: purchase = {
      id,
      user_id,
      product_id,
      quantity,
      total_price: totalPrice,
    };

    await connection("labecommerce_purchases").insert(products);

    res.status(201).send("Compra registrada com sucesso!");
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default postPurchase;

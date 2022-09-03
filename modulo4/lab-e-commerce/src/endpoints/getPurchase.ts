import { Request, Response } from "express";
import { connection } from "../data/connection";

const getPurchase = async (req: Request, res: Response) => {
  try {
    const userID = req.params.user_id;

    const result = await connection.raw(`
    SELECT labecommerce_purchases.id, labecommerce_users.name, labecommerce_products.name, quantity, price, total_price, image_url 
    FROM labecommerce_purchases
    JOIN labecommerce_users on user_id = labecommerce_users.id
    JOIN labecommerce_products on product_id = labecommerce_products.id
    WHERE user_id = ${userID};
    `);

    res.status(200).send(result[0]);
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default getPurchase;

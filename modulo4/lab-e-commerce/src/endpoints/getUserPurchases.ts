import { Request, Response } from "express";
import { connection } from "../data/connection";

const getUserPurchases = async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
        SELECT 
        labecommerce_users.id as IdPessoa, 
        labecommerce_users.name as NomePessoa, 
        labecommerce_products.name as NomeProduto, labecommerce_purchases.id as IdCompra, 
        labecommerce_purchases.quantity as Quantidade, labecommerce_purchases.total_price as PrecoTotal
        FROM labecommerce_purchases
        INNER JOIN labecommerce_users 
        ON labecommerce_purchases.user_id = labecommerce_users.id
        INNER JOIN labecommerce_products 
        ON labecommerce_purchases.product_id = labecommerce_products.id
    `);

    res.status(200).send(result[0]);
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default getUserPurchases;

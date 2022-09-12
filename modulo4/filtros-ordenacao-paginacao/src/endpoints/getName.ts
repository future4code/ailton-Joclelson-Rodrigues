import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getName = async (req: Request, res: Response): Promise<void> => {
  try {
    const nome = req.query.nome;
    console.log(nome);
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio WHERE name LIKE "%${nome}%" ;
    `);

    if (!result[0].length) {
      res.statusCode = 404;
      throw new Error("");
    }

    res.status(200).send(result[0]);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

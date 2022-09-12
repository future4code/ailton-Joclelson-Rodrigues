import { Request, Response } from "express";
import { connection } from "../data/connection";

export const filterUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tipo = req.params.type;
    console.log(tipo);
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio WHERE type LIKE "%${tipo}%" ;
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

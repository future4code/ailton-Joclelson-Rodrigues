import { Request, Response } from "express";

const criarTarefa = async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;
    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error("Preencha os campos");
    }
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};
export default criarTarefa;

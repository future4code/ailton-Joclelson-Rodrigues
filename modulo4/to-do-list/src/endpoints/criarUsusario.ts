import { Request, Response } from "express";
import inserirUsuario from "../data/inserirUsuario";

const criarUsuario = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      res.status(401).send("Preencha os campos corretamente");
      return;
    }
    const id: string = Date.now() + Math.random().toString();
    await inserirUsuario(id, name, nickname, email);
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};
export default criarUsuario;

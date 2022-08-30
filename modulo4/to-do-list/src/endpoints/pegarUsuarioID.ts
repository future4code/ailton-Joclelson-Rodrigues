import { Request, Response } from "express";
import selecionarUsuarioID from "../data/selecionarUsuarioID";

const pegarUsuarioID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const usuario = await selecionarUsuarioID(id);
    if (!usuario) {
      res.status(404).send({ message: "Usuário não encontrado" });
    }
    res.status(200).send({
      id: usuario.id,
      nickname: usuario.nickname,
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};
export default pegarUsuarioID;

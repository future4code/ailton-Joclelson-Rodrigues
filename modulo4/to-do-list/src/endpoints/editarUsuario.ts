import { Request, Response } from "express";
import { atualizarUsuario } from "../data/atualizarUsuario";

const editarUsuario = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, nickname, email } = req.body;
    if (name === "" || nickname === "" || email === "") {
      throw new Error("Nenhum dos campos pode estar em branco");
    }
    if (!name && !nickname && !email) {
      throw new Error("Escolha ao menos um valor para alterar");
    }
    await atualizarUsuario(id, name, nickname, email);

    res.status(201).send({ message: "Usuário atualizado com sucesso" });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};
export default editarUsuario;

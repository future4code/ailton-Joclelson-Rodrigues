import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

const postUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    let id: string = String(Date.now());

    if (!name || !email || !password) {
      throw new Error("Preencha os campos nome, email e senha!");
    }
    const newUser: user = {
      id,
      name,
      email,
      password,
    };
    await connection("labecommerce_users").insert(newUser);

    res.status(201).send(`O usuário ${name} foi criado com sucesso!`);
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
export default postUsers;

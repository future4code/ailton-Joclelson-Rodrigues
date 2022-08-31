import { Request, Response } from "express";
import { inserirEndereco } from "../data/inserirEndereco";
import { consultaCep } from "../services/consultaCep";
import { endereco } from "../types/endereco";

export const criarEndereco = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep as string;
    const numero = req.body.numero;
    const resultado = await consultaCep(cep);

    if (!resultado || resultado.erro === true) {
      res.statusCode = 404;
      throw new Error("CEP não encontrado!");
    }
    const endereco: endereco = {
      cep: resultado.cep,
      logradouro: resultado.logradouro,
      numero,
      complemento: resultado.complemento,
      bairro: resultado.bairro,
      cidade: resultado.localidade,
      estado: resultado.uf,
    };

    await inserirEndereco(endereco);

    res.status(200).send("Endereço cadastrado!");
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
};

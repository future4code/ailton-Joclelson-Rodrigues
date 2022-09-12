import { endereco } from "../types/endereco";
import { connection } from "./connection";

export const inserirEndereco = async (endereco: endereco) => {
  try {
    await connection().insert(endereco).into("usuario_cep");
  } catch (error) {
    console.log(error);
  }
};

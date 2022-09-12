import { connection } from "..";

export default async function selecionarUsuarioID(id: string) {
  const resultado = await connection("TodoListUser").select("*").where({ id });
  return resultado[0];
}

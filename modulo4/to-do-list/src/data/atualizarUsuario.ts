import { connection } from "..";

export const atualizarUsuario = async (
  id: string,
  name?: string,
  nickname?: string,
  email?: string
) => {
  if (name) {
    await connection.raw(
      `UPDATE TodoListUser SET NAME = "${name}" WHERE id = "${id}"`
    );
  }
  if (nickname) {
    await connection.raw(
      `UPDATE TodoListUser SET NAME = "${nickname}" WHERE id = "${id}"`
    );
  }
  if (email) {
    await connection.raw(
      `UPDATE TodoListUser SET NAME = "${email}" WHERE id = "${id}"`
    );
  }
};

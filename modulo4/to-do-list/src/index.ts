import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import criarUsuario from "./endpoints/criarUsusario";
import pegarUsuarioID from "./endpoints/pegarUsuarioID";
import editarUsuario from "./endpoints/editarUsuario";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
  },
});

const app = express();
app.use(express.json());

app.put("/usuario", criarUsuario);

app.get("/usuario/:id", pegarUsuarioID);

app.post("/usuario/editar/:id", editarUsuario);

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

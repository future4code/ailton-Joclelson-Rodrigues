import express, { Express, Request, Response } from "express";
import cors from "cors";

import { usuario, usuarios } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/usuarios", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const cpfParams = req.query.cpf as string;
    let cpf = cpfParams.replace(
      /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/,
      "$1.$2.$3-$4"
    );
    const usuario = usuarios.find((usuario) => usuario.cpf === cpf);
    if (cpf !== usuario?.cpf) {
      statusCode = 401;
      throw new Error("O CPF não existe");
    }
    res.status(200).send({ saldo: `R$: ${usuario.saldo},00` });
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
});

app.get("/usuarios/todos", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(statusCode).send("Erro na requisição");
  }
});

app.post("/usuarios/criar", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { nome, cpf, nascimento } = req.body;
    const cpfUsuario = usuarios.find((usuario) => usuario.cpf === cpf);
    const [dia, mes, ano] = nascimento.split("/");
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - ano;
    if (idade < 18) {
      statusCode = 401;
      throw new Error(
        "O usuário não possui idade minima para usar nossos serviços"
      );
    }
    if (cpfUsuario?.cpf === cpf) {
      statusCode = 401;
      throw new Error("O CPF inserido ja consta em nossa base de dados");
    }
    const novoUsuario: usuario = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      nome,
      cpf,
      nascimento,
      saldo: 0,
      debitos: [],
    };
    usuarios.push(novoUsuario);
    res.status(201).send("Usuário criado com sucesso");
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
});

app.put("/usuarios/deposito", (req: Request, res: Response) => {
  try {
    const { nome, cpf, valor } = req.body;
    const usuarioProcura = usuarios.find(
      (usuario) => usuario.nome === nome && usuario.cpf === cpf
    );
    let saldo: number = usuarioProcura?.saldo + valor;
  } catch (error) {}
});

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

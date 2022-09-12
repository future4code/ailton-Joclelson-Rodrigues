import { app } from "./app";
import { criarEndereco } from "./endpoints/criarEndereco";

app.get("/busca-cep/:cep", criarEndereco);

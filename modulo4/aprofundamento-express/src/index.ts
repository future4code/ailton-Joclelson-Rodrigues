import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

//Exercicio 1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//exercicio 2
type tipoAfazer = {
    userId: number | string,
    id: number,
    title: string,
    completed: boolean
}

//Exercicio 3
const afazeres:tipoAfazer[] = [
    {
        userId: "1",
        id: 1,
        title: "Limpar a casa",
        completed: false
    },
    {
        userId: "3",
        id: 1,
        title: "Estudar",
        completed: false
    },
    {
        userId: "2",
        id: 1,
        title: "Academia",
        completed: true
    }
]

//Exercicio 4
app.get("/atividades", (request, response) => {
    const {completo} = request.body
    response.send(afazeres.filter((res) => {
        return res.completed === completo
    }))
})

//Exercicio 5
app.post("/addAtividades", (request, response) => {
    const {userId, id, title, completed} = request.body

    const data:tipoAfazer = {
        userId,
        id,
        title,
        completed
    }
    afazeres.push(data)
    response.send(afazeres)
})

// Exercicio 6
app.put("/editarAtividade/:id", (request, response) => {
    const id = request.params.id
    const {completed} = request.body

    const filterAtividade = afazeres.filter((afazer) => {
        return afazer.id === Number(id)
    })
    filterAtividade[0].completed = completed
    response.send(afazeres)
})

//exercicio 7
app.delete("/deletaAtividade/:id", (request, response) => {
    const id = request.params.id

    const novasAtividades = afazeres.filter((afazer) => {
        return afazer.id !== Number(id)
    })
    response.send(novasAtividades)
})

//Exercicico 8
app.get("/atividadeUsuario/:id", (request, response) => {
    const id = request.params.id

    const atividadeUsuario = afazeres.filter((atividade) => {
        return atividade.userId === id
    })
    response.send(atividadeUsuario)
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
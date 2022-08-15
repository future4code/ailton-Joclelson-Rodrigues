import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//Exercicio 1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//Exercicio 2 
type tipo1 = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercicio 3
const pessoas:tipo1[] = [
    {
        id: "1",
        name: "Jhon",
        phone: 94981092675,
        email: "jhon@hotmail.com",
        website: "www.jhon.com.br"
    },
    {
        id: "2",
        name: "Bianca",
        phone: 94981097788,
        email: "bianca@hotmail.com",
        website: "www.bd.com.br"
    },
    {
        id: "3",
        name: "Tavares",
        phone: 94981092675,
        email: "tvs@hotmail.com",
        website: "www.tvs.com"
    }
]

//Exercicio 4
app.get("/usuarios", (req, res) => {
    res.send(pessoas)
})

//Exercicio 5
type tipo2 = {
    id: string | number,
    title: string,
    body: string,
    userId: number
}

//Exercicio 6
const posts:tipo2[] = [
    {
        id: "1",
        title: "sunt aut facere repellat provident",
        body: "quia et suscipitsuscipit recusandae consequuntur expedita et",
        userId: 1
    },
    {
        id: "2",
        title: "molestias quasi exercitationem",
        body: "et iusto sed quo iurevoluptatem occaecati omnis",
        userId: 1
    },
    {
        id: "3",
        title: "molestias quasi exercitationem",
        body: "et iusto sed quo iurevoluptatem occaecati omnis",
        userId: 1
    }
]

//Exercicio 7 
app.get("/posts", (req, res) => {
    res.send(posts)
})

//Exercicio 8
app.get("/posts/:id", (req, res) => {
    const id = req.params.id

    const postId = posts.filter((post) => {
        return post.id === id
    })
    console.log(postId)
    res.send(postId)
})

//Exercicio 9 - Desafio
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id

    const excluirPost = posts.filter((post) => {
        return post.id !== id
    })
    res.send(excluirPost)
})

//Exercicio 10 - Desafio
app.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id

    const excluirUsuario = pessoas.filter((pessoa) => {
        return pessoa.id !== id
    })
    res.send(excluirUsuario)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
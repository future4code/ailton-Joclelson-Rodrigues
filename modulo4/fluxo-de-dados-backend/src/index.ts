import express from "express";
import cors from "cors";

import { produto, produtos } from "./data"

const app = express();

app.use(express.json());
app.use(cors());


//Exercicio 1
app.get("/test", (request, response) => {
    try {
        response.status(200).send("A API esta funcionando")
    } catch (error) {
        response.status(500).send("Algo inesperado aconteceu")        
    }
})

//Exercicio 3
app.post("/produtos/criar", (request, response) => {
    try {
        const {name, price} = request.body
    const dados:produto = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: name,
        price: price
    }
    if(!name || !price) {
        response.statusCode = 400
        throw new Error("Não pode passar valores vazios")
    }
    if(typeof name !== "string" || typeof price !== "number" || price <= 0) {
        response.statusCode = 400
        throw new Error("Valor invalido")
    }
    produtos.push(dados)
    response.status(201).send(produtos.map((produto) => {
        return produto
    }))
    } catch (error:any) {
        response.status(response.statusCode || 500).send(error.message)
    }
})

//Exercicio 4
app.get("/produtos", (request, response) => {
    try {
        response.status(200).send(produtos.map((produto) => {
            return produto
        }))
    } catch (error) {
        response.status(500).send("Algo inesperado aconteceu")
    }
})

//Exercicio 5
app.put("/produtos/editar/:id", (request, response) => {
    try {
        const id = request.params.id
        const novoPrice = request.body.price
        if(!novoPrice) {
            response.statusCode = 400
            throw new Error("Não pode passar valores vazios")
        }
        if(typeof novoPrice !== "number" || novoPrice <= 0) {
            response.statusCode = 400
            throw new Error("Valor invalido")
        }
        const filterProduto = produtos.filter((produto) => {
            return produto.id === id
        })

        filterProduto[0].price = novoPrice
        response.status(201).send(produtos)
    } catch (error:any) {
        response.status(response.statusCode || 500).send(error.message)
    }
})

//Exercicio 6
app.delete("/produtos/delete/:id", (request, response) => {
    try {
        const id = request.params.id

        response.status(200).send(produtos.filter((produto) => {
        return produto.id !== id
    }))
    } catch (error) {
        response.status(500).send("Algo inesperado aconteceu")
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
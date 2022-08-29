import express, { Request, Response } from "express";
import cors from "cors";

import { user, users } from "./data"

const app = express();

app.use(express.json());
app.use(cors());


//Exercicio 1 2 3
app.get("/users", (req:Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string
        const user: user | undefined = users.find((user) => user.name === name)
        if(!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})        
    }
})

//Exercicio 4
app.put("/users", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        const {id, name, email, type, age} = request.body
        if(!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Verifique os campos")
        }
        const newUser:user = {id, name, email, type, age}
        users.push(newUser)
        response.status(201).send("Usuário criado com sucesso!")
    } catch (error:any) {
        response.status(errorCode).send({message: error.message})           
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
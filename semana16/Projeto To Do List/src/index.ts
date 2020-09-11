import knex from 'knex'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { AddressInfo } from "net";

/****************************************************************/

dotenv.config()

/****************************************************************/

const connection = knex({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

/****************************************************************/

const app = express()

app.use(express.json())

/****************************************************************/



/************************CRIANDO NOVO USUÁRIO************************/
const createNewUser = async (name: string, nickname: string, email: string): Promise<void> => {
    try {
        await connection
        .insert({
            name,
            nickname,
            email
        })
        .into("Users")
        
        console.log("Sucesso!")
    } catch (error) {
        console.log("Não foi possível criar o usuário. Erro: " + error)
    }
}

app.put("/user", async(req: Request, res: Response): Promise<void> =>{
    try {
        await createNewUser(
            req.body.name as string,
            req.body.nickname as string,
            req.body.email as string
        )

        res.status(200).send({menssage: "Usuário criado com sucesso!"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

/************************PROCURANDO USUÁRIO PELO ID************************/
const searchUserById = async(id:number): Promise<any> => {
    try {
        const result = await connection
        .select ("*")
        .from ("Users")
        .where("id", `${id}`)

        return result
    } catch (error) {
        console.log(error)
    }
}

app.get("/user/:id", async(req: Request, res: Response): Promise<any> => {
    try {
        const result = await searchUserById(
            Number(req.params.id)
        )

        res.status(200).send({result})
    } catch (error) {
        res.status(400).send({message: "Usuário não encontrado!"})
    }
})

/************************EDITANDO USUÁRIO************************/
const updateUser = async(id: number, name: string, nickname: string, email: string): Promise<void> => {
    try {
        await connection ("Users")
        .where("id", `${id}`)
        .update({name, nickname, email})
        
        console.log("Sucesso!")
    } catch (error) {
        console.log("Não foi possível atualizar os dados do usuário. Erro: " + error)
    }
}

app.post("/user/edit/:id", async(req: Request, res: Response): Promise<void> => {
    try {
        await updateUser(
            Number(req.params.id),
            req.body.name as string,
            req.body.nickname as string,
            req.body.email as string
        )

        res.status(200).send({message: "Usuário atualizado com sucesso!"})
    } catch (error) {
        res.status(400).send({message: "Erro ao atualizar usuário"})
    }
})

/************************CRIANDO NOVA TAREFA************************/
const createNewTask = async (title: string, description: string, limit_date: Date, creator_user_id: number): Promise<void> => {
    try {
        await connection
        .insert({
        title,
        description,
        limit_date,
        creator_user_id
        })
        .into("ToDoListTask")

        console.log("Sucesso!")
    } catch (error) {
        console.log("Não foi possível criar a tarefa. Erro: " + error)
    }
}

app.put("/task", async(req: Request, res: Response): Promise<void> => {
    try {
        await createNewTask(
            req.body.title as string,
            req.body.description as string,
            new Date(req.body.limit_date),
            Number(req.body.creator_user_id)
        )

        res.status(200).send({message: "Tarefa criada com sucesso!"})
    } catch (error) {
        res.status(400).send({message: "Tarefa não encontrada. Erro: " + error})
    }
})

/************************PROCURANDO TAREFA PELO PELO ID************************/
const searchTaskById = async(id:number): Promise<any> => {
    try {
        const result = await connection
        .select ("ToDoListTask.id as taskId", "ToDoListTask.title", "ToDoListTask.description", "ToDoListTask.limit_date as limitDate", 
                "ToDoListTask.status", "ToDoListTask.creator_user_id as creatorUserId", "Users.nickname as creatorUserNickname")
        .from("ToDoListTask")
        .innerJoin("Users", "Users.id","ToDoListTask.creator_user_id")
        .where("ToDoListTask.id", `${id}`)

        return result
    } catch (error) {
        console.log(error)
    }
}

app.get("/task/:id", async( req: Request, res: Response): Promise<any> => {
    try {
        const result = await searchTaskById(
            Number(req.params.id)
        )
    
        res.status(200).send({result})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
})

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
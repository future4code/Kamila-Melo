import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.email || ! userData.password){
            throw new Error("Insira todas as informações necessárias para o cadastro")
        }

        if(userData.password.length < 6){
            throw new Error("Senha deve conter mais que 6 caracteres")
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            userData.password
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
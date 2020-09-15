import {Request, Response} from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'

export const login = async (req: Request, res: Response): Promise<void> => {
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

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(userData.email)

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(userData.password, user.password)

        if(!compareResult){
            throw new Error ("Usuário ou senha inválida")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id, role: user.role})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        await BaseDatabase.destroyConnection()
    }
}
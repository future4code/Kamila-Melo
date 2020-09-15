import {Request, Response} from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        if(!userData.email || !userData.password || !userData.role){
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

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(userData.password)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            hashPassword,
            userData.role
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id,role: userData.role})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        await BaseDatabase.destroyConnection()
    }
}
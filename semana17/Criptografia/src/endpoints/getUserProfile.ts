import {Request, Response} from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import {UserDatabase} from '../data/UserDatabase'
import {Authenticator} from '../services/Authenticator'

export const getUserProfile = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(authenticationData.id)

        if(!user){
            throw new Error('usuário não encontrado')
        }

        if(authenticationData.role !== "NORMAL"){
            throw new Error("Somente um usuário NORMAL pode acessar essa funcionalidade")
        }

        res.status(200).send({"id":user.id, "email": user.email, role: authenticationData.role})
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        await BaseDatabase.destroyConnection()
    }
    
}
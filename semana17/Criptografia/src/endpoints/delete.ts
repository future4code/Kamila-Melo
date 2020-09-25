import {Request, Response} from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const deleteUser = async(req:Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = await authenticator.getData(token)

        if(authenticationData.role !== "ADMIN"){
            throw new Error("Somente usuários ADMIN podem acessar essa funcionalidade")
        }

        const id = req.params.id

        const userDatabase = new UserDatabase()
        await userDatabase.deleteUser(id)

        res.status(200).send({message: "Usuário deletado!"})
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        await BaseDatabase.destroyConnection()
    }
}
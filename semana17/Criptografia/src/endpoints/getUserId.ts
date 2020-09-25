import {Request, Response} from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const getUserId = async(req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        authenticator.getData(token)

        const id = req.params.id

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        await BaseDatabase.destroyConnection()
    }
}
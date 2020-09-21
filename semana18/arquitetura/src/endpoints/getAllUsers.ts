import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'

export const getAllUsers = async(req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        const userBusiness = new UserBusiness()
        const users = await userBusiness.getAllUsers(token)

        res.status(200).send({
           users
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }finally{
        await BaseDatabase.destroyConnection()
    }
}
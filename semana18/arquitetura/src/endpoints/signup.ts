import { BaseDatabase } from "../data/BaseDatabase"
import {Request, Response} from 'express'
import { UserBusiness } from "../business/UserBusiness"

export const signUp = async(req:Request, res: Response): Promise<void> => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const userBusiness = new UserBusiness()
        const token = await userBusiness.signUp(userData.name, userData.email, userData.password, userData.role)

        res.status(200).send({"token": token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }finally{
        await BaseDatabase.destroyConnection()
    }
}
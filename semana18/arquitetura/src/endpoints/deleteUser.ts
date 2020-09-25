import { BaseDatabase } from "../data/BaseDatabase"
import {Request, Response} from 'express'
import { UserBusiness } from "../business/UserBusiness"

export const deleteUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            id: req.params.id,
            token: req.headers.authorization as string
        }

        const userBusiness = new UserBusiness()
        await userBusiness.deleteUser(userData.id, userData.token)

        res.status(200).send({message: "Usuário apagado com sucesso!"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }finally{
        await BaseDatabase.destroyConnection()
    }
}
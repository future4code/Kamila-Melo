import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { LoginInputDTo } from '../model/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export class UserController{
    private static userBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    )

    public async signUp(req: Request, res: Response): Promise<void> {
        try {            
            const token = await UserController.userBusiness.signUp(req.body.name, req.body.email, req.body.password, req.body.role)

            res.status(200).send({"token": token})
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BaseDatabase.destroyConnection()
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {

            const userData: LoginInputDTo = {
                email: req.body.email,
                password: req.body.password
            }
            const token = await UserController.userBusiness.login(userData)

            res.status(200).send({"token": token})
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BaseDatabase.destroyConnection()
        }
    }
}
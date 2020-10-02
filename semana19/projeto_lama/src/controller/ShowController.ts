import {Request, Response} from 'express'
import { ShowBusiness } from '../business/ShowBusiness'
import { BandDatabase } from '../data/BandDatabase'
import { BaseDatabase } from '../data/BaseDatabase'
import { ShowDatabase, WEEK_DAY } from "../data/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ShowController{
    private static showBusiness = new ShowBusiness(
        new ShowDatabase(),
        new Authenticator(),
        new IdGenerator()
    )

    public async registerShow(req: Request, res: Response): Promise<void> {
        try {        
            const token = req.headers.authorization as string

            await ShowController.showBusiness.registerShow(token, req.body.week_day, req.body.start_time, req.body.end_time, req.body.band_id)

            res.status(200).send({message: "Successfully registered"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BaseDatabase.destroyConnection()
        }
    }

    public async getAllShowByDay(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization as string

            const week_day = req.body.week_day as WEEK_DAY

            const result = await ShowController.showBusiness.getAllShowByDay(token, week_day)

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BandDatabase.destroyConnection()
        }
    }
}
import {Request, Response} from 'express'
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BaseDatabase } from '../data/BaseDatabase';
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandController{
    private static bandBusiness = new BandBusiness(
        new BandDatabase(),
        new Authenticator(),
        new IdGenerator()
    )

    public async registerBand(req: Request, res: Response): Promise<void> {
        try {        
            const token = req.headers.authorization as string

            await BandController.bandBusiness.registerBand(token, req.body.name, req.body.music_genre, req.body.responsible)

            res.status(200).send({message: "Successfully registered"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BaseDatabase.destroyConnection()
        }
    }

    public async searchBand(req: Request, res: Response): Promise<void>{
        try {
            const token = req.headers.authorization as string

            const name = req.query.name as string
            const id = req.query.id as string

            const result = await BandController.bandBusiness.searchBand(token, name, id)
            
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            await BaseDatabase.destroyConnection()
        }
    }
}
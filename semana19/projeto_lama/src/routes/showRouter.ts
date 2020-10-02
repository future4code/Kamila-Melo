import express from 'express'
import { ShowController } from '../controller/ShowController'


export const showRouter = express.Router()

showRouter.post("/register", new ShowController().registerShow)
showRouter.get("/getallshow", new ShowController().getAllShowByDay)
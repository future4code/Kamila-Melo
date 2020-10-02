import { ShowDatabase, WEEK_DAY } from "../data/ShowDatabase";
import { Show } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness{
    constructor(
        private showDatabase: ShowDatabase,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){}

    public async registerShow(token: string, week_day: WEEK_DAY, start_time: number, end_time: number, band_id: string): Promise<void>{
        await this.authenticator.getData(token)

        const showData = {
            week_day,
            start_time,
            end_time,
            band_id
        }

        if(!showData.week_day || !showData.start_time || !showData.end_time || !showData.band_id){
            throw new Error("Enter all necessary information for registration")
        }

        if(showData.week_day !== WEEK_DAY.FRIDAY && showData.week_day !== WEEK_DAY.SATURDAY && showData.week_day !== WEEK_DAY.SUNDAY){
            throw new Error("Please enter a valid day")
        }

        if(showData.start_time < 8 || showData.end_time > 23){
            throw new Error("Invalid time")
        }

        if(showData.end_time - showData.start_time > 1){
            throw new Error("Show with a maximum duration of one hour")
        }

        const checkTime = await this.showDatabase.checkTime(showData.start_time,showData.end_time)

        if(checkTime){
            throw new Error("Time not available")
        }

        const id = this.idGenerator.generateId()

        await this.showDatabase.registerShow(
            id,
            showData.week_day,
            showData.start_time,
            showData.end_time,
            showData.band_id
        )
    }

    public async getAllShowByDay(token: string, week_day: WEEK_DAY): Promise<Show>{
        await this.authenticator.getData(token)

        if(!week_day){
            throw new Error("Enter a value for day")
        }

        if(week_day !== WEEK_DAY.FRIDAY && week_day !== WEEK_DAY.SATURDAY && week_day !== WEEK_DAY.SUNDAY){
            throw new Error("Please enter a valid day")
        }

        const result = await this.showDatabase.getShowByDay(week_day)

        return result
    }
}
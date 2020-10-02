import { Show } from "../model/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase{
    private static TABLE_NAME: string = 'music_shows'

    public async registerShow(id: string, week_day: WEEK_DAY, start_time: number, end_time: number, band_id: string): Promise<void>{
        await this.getConnection()
        .insert({
            id,
            week_day,
            start_time,
            end_time,
            band_id
        })
        .into(ShowDatabase.TABLE_NAME)
    }

    public async getShowByDay(week_day: WEEK_DAY): Promise<Show>{
        const result = await this.getConnection().raw(`
            select music_bands.name, music_shows.week_day, music_shows.start_time, music_shows.end_time
            from music_bands
            inner join music_shows
            on music_shows.band_id = music_bands.id 
            where week_day = "${week_day}"
            order by start_time asc;
        `)
        return result[0][0]
    }

    public async checkTime(start_time: number, end_time: number): Promise<Show> {
        const result = await this.getConnection()
          .select('*')
          .from(ShowDatabase.TABLE_NAME)
          .where({
            start_time,
            end_time
          })
        return result[0];
      }
}

export enum WEEK_DAY{
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

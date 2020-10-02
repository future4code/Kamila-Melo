import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase{
    private static TABLE_NAME: string = 'music_bands'

    public async registerBand(id: string, name: string, music_genre: string, responsible: string): Promise<void>{
        await this.getConnection()
        .insert({
            id,
            name,
            music_genre,
            responsible
        })
        .into(BandDatabase.TABLE_NAME)
    }

    public async getUserById(id: string): Promise<Band>{
        const result = await this.getConnection()
        .select("*")
        .from(BandDatabase.TABLE_NAME)
        .where({id})

        return result[0] 
    }

    public async searchBand(name?: string, id?: string): Promise<Band>{
        const result = await this.getConnection().raw(`
            select * from ${BandDatabase.TABLE_NAME}
            where name like "%${name?.toLowerCase()}%"
            or id = "${id}"
        `)

        const myBand = Band.convertToBandModel(result[0][0])
        console.log(myBand)
        return myBand
    }
}
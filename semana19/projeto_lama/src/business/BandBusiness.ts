import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness{
    constructor(
        private bandDatabase: BandDatabase,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){}

    public async registerBand(token: string, name: string, music_genre: string, responsible: string): Promise<void>{
        const authenticationData = this.authenticator.getData(token)

        const bandData = {
            name,
            music_genre,
            responsible
        }

        if(authenticationData.role !== "ADMIN"){
            throw new Error("Only administrators can register the bands")
        }

        if(!bandData.name || !bandData.music_genre || !bandData.responsible){
            throw new Error("Enter all necessary information for registration")
        }

        const id = this.idGenerator.generateId()

        await this.bandDatabase.registerBand(
            id,
            bandData.name,
            bandData.music_genre,
            bandData.responsible,
        )
    }

    public async searchBand(token: string, name?: string, id?: string): Promise<Band>{
        await this.authenticator.getData(token)

        if(!name && !id){
            throw new Error("Enter a value for \"name \" or \"id \"")
        }

        const result = await this.bandDatabase.searchBand(name, id)

        if(!result){
            throw new Error("No bands found")
        }

        return result
    }

}
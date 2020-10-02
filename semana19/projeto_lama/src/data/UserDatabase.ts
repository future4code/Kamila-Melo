import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME: string = 'music_users'

    public async createUser(id: string, name: string, email: string, password: string, role: USER_ROLES): Promise<void>{
        await this.getConnection()
        .insert({
            id,
            name,
            email,
            password,
            role
        })
        .into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<User>{
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({email})

        const myUser = User.convertToUserModel(result[0])

        return myUser 
    }

    public async getUserById(id: string): Promise<User>{
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({id})

        const myUser = User.convertToUserModel(result[0])

        return myUser
    }
}

export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
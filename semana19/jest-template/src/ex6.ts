import knex from 'knex'
import Knex from 'knex'

export abstract class BaseDatabase{
    private static connection: Knex | null = null
    protected getConnection(): Knex{
        if(BaseDatabase.connection === null){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
                }
            })
        }
        return BaseDatabase.connection
    }

    public static async destroyConnection(): Promise<void> {
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy()
            BaseDatabase.connection = null
        }
    }
}

export class PostDatabase extends BaseDatabase{
    private static TABLE_NAME: string = "posts"

    public async createPost(id: string, photo: string, description: string, createdAt: string, role: POST_ROLES, userId: string): Promise<void>{
        await this.getConnection()
        .insert({
            id,
            photo,
            description,
            createdAt,
            role,
            userId
        })
        .into(PostDatabase.TABLE_NAME)
    }

    public async getFeed(id: string): Promise<Post>{
        const result = await this.getConnection().raw(
            `
            select posts.id, posts.photo, posts.description, posts.createdAt, posts.userId
            from posts
            join friends
            on friends.id_user = posts.userId or friends.id_friend = posts.userId
            join User_Lab
            on friends.id_friend = User_Lab.id or  friends.id_user = User_Lab.id
            where User_Lab.id = "${id}" and posts.userId <> "${id}"
            order by posts.createdAt desc;
            `
        )

        return result[0]
    }
}

export class Post{
    constructor(
        private id: string, 
        private photo: string, 
        private description: string, 
        private createdAt: string, 
        private role: POST_ROLES, 
        private userId: string
    ){}

    getId() {return this.id}
    getPhoto() {return this.photo}
    getDescription() {return this.description}
    getCreatedAt() {return this.createdAt}
    getRole() {return this.role}
    getUserId() {return this.userId}

    setId(id: string) {this.id = id}
    setPhoto(photo: string) {this.photo = photo}
    setDescription(description: string) {this.description = description}
    setCreatedAt(createdAt: string) {this.createdAt = createdAt}
    setRole(role: POST_ROLES) {this.role = role}
    setUserId(userId: string) {this.userId = userId}

}

    export enum POST_ROLES{
        NORMAL = "NORMAL",
        EVENTO = "EVENTO"
    }
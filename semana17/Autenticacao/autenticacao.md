### Exercício 1

a) Sim, pois assim teríamos mais opções de chaves evitando que houvesse repetição.

b)
```
import {v4} from 'uuid';

export class IdGenerator{
    public generateId(): string{
        const id = v4() 
        return id
    }   
}
```

### Exercício 2

a) Se conecta ao banco de dados e passa as informações necessária para se criar um usuário.

b)
```
create table User(
	id varchar(255) not null primary key,
    email varchar(255) unique not null,
    password varchar(255) not null
);
```

c)
```
import Knex from 'knex'
import knex from "knex"

export abstract class BaseDatabase{
    private static connection: Knex | null =null
    
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
}


import {BaseDatabase} from './BaseDatabase'

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME: string = "User"

    public async createUser( id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert ({
            id,
            email,
            password
        })
        .into(UserDatabase.TABLE_NAME)
    }

}
```

### Exercício 3

a) Ela garante que o retorno vira com uma string.

b)
```
import * as jwt from 'jsonwebtoken'

export class generateToken{
    public generateToken(data: AuthenticationData): string{
        return jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN as string}
        )
    }

    public getData(token: string): AuthenticationData{
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        return {
            id: data.id
        }
    }
}

export interface AuthenticationData{
    id: string
}
```

### Exercício 4

a)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            userData.password
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

b)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.email || ! userData.password){
            throw new Error("Insira todas as informações necessárias para o cadastro")
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            userData.password
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

c)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.email || ! userData.password){
            throw new Error("Insira todas as informações necessárias para o cadastro")
        }

        if(userData.password.length < 6){
            throw new Error("Senha deve conter mais que 6 caracteres")
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            userData.password
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Exercício 5

a)
```
import {BaseDatabase} from './BaseDatabase'

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME: string = "User"

    public async createUser( id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert ({
            id,
            email,
            password
        })
        .into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
          .select('*')
          .from(UserDatabase.TABLE_NAME)
          .where({email})
          return result[0]
      }

}
```

### Exercício 6

a) e b)
```
import {Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.email || ! userData.password){
            throw new Error("Insira todas as informações necessárias para o cadastro")
        }

        if(userData.password.length < 6){
            throw new Error("Senha deve conter mais que 6 caracteres")
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(userData.email)

        if(userData.password !== user.password){
            throw new Error ("Usuário ou senha inválida")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Exercício 7

a) Ela mostra qe o retorno pode ser de qualquer coisa.

b)
```
import * as jwt from 'jsonwebtoken'

export class Authenticator{
    public generateToken(data: AuthenticationData): string{
        return jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN as string}
        )
    }

    public getData(token: string): AuthenticationData{
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        return {
            id: data.id
        }
    }
}

export interface AuthenticationData{
    id: string
}
```

### Exercício 8

a)
```
import {BaseDatabase} from './BaseDatabase'

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME: string = "User"

    public async createUser( id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert ({
            id,
            email,
            password
        })
        .into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
          .select('*')
          .from(UserDatabase.TABLE_NAME)
          .where({email})
          return result[0]
      }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where(({id}))
        return result[0]
    }

}
```

b)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import {Authenticator} from '../services/Authenticator'

export const getUserProfile = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(authenticationData.id)

        if(!user){
            throw new Error('usuário não encontrado')
        }

        res.status(200).send({"id":user.id, "email": user.email})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```
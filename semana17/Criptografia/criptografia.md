### Exercício 1

a) Round é o tempo de execução do algoritmo. Salt é uma string aleatória na senha que serve para evitar ataques chamados rainbow table. 12, usei o mesmo valor por sero padrão na maioria das libs. 

b)
```
import * as bcrypt from 'bcryptjs'

export class HashManager{
    public async hash(password:string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(password, salt)

        return result
    }
}
```

c)
```
import * as bcrypt from 'bcryptjs'

export class HashManager{
    public async hash(password:string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(password, salt)

        return result
    }

    public async compare(password: string, hash: string): Promise<boolean>{
        return bcrypt.compare(password,hash)
    }
}
```

### Exercício 2

a) O login. Pois precisamos criptografar a senha antes de salvar no banco.

b)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
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

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(userData.password)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            hashPassword
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
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'

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

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(userData.password, user.password)

        if(!compareResult){
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

### Exercício 3

a)
```
alter table User
add role enum ("NORMAL", "ADMIN") default "NORMAL";
```

b)
```
import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../data/UserDatabase'

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
            id: data.id,
            role: data.role
        }
    }
}

export interface AuthenticationData{
    id: string,
    role: USER_ROLES
}
```

c)
```
import {Request, Response} from 'express'
import {UserDatabase} from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import {IdGenerator} from '../services/idGenerator'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        if(!userData.email || !userData.password || !userData.role){
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

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(userData.password)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            hashPassword,
            userData.role
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id,role: userData.role})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

d)
```
import {Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'

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

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(userData.password, user.password)

        if(!compareResult){
            throw new Error ("Usuário ou senha inválida")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id, role: user.role})

        res.status(200).send({message: "token", token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Exercício 4

a)
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

        if(authenticationData.role !== "NORMAL"){
            throw new Error("Somente um usuário NORMAL pode acessar essa funcionalidade")
        }

        res.status(200).send({"id":user.id, "email": user.email, role: authenticationData.role})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
}
```

### Exercício 5

```
import {Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const deleteUser = async(req:Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = await authenticator.getData(token)

        if(authenticationData.role !== "ADMIN"){
            throw new Error("Somente usuários ADMIN podem acessar essa funcionalidade")
        }

        const id = req.params.id

        const userDatabase = new UserDatabase()
        await userDatabase.deleteUser(id)

        res.status(200).send({message: "Usuário deletado!"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Exercício 6

```
import {Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const getUserId = async(req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        authenticator.getData(token)

        const id = req.params.id

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Exercício 7

a)
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
```

b)
```
finally{
        await BaseDatabase.destroyConnection()
    }
```
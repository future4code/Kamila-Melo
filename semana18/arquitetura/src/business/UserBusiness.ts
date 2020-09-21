import { UserDatabase, USER_ROLES } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness{
    public async signUp(name: string, email: string, password: string, role: USER_ROLES): Promise<string>{

        if(!name || !email || !password || !role){
            throw new Error("Insira todas as informações necessárias para o cadastro")
        }

        if(password.length < 6){
            throw new Error("A senha deve conter no mínimo seis caracteres")
        }

        if(email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const userDatabase = new UserDatabase()
        await userDatabase.signup(
            id,
            name,
            email,
            hashPassword,
            role
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id, role})

        return token
    }

    public async login(email: string, password: string): Promise<string>{

        if(!email || !password){
            throw new Error("Insira todas as informações necessárias para o login")
        }

        if(email.indexOf("@") === -1){
            throw new Error("E-mail inválido")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(email)

        const hashManager = new HashManager()
        const comparePassword = await hashManager.compare(password, user.password)
        
        if(!comparePassword){
            throw new Error("Usuário ou senha inválida")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id, role: user.role})

        return token
    }

    public async getAllUsers(token:string): Promise<any>{
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getAllUsers()

        return user
    }

    public async deleteUser(id:string, token: string): Promise<void> {
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = userDatabase.getUserById(id)

        if(authenticationData.role !== "ADMIN"){
            throw new Error("Apenas administradores podem deletar usuários")
        }

        return await userDatabase.deleteUser(id)
    }
}
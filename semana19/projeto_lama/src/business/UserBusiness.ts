import { UserDatabase, USER_ROLES } from "../data/UserDatabase";
import { LoginInputDTo} from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){}

    public async signUp(name: string, email: string, password: string, role: USER_ROLES): Promise<string>{
        if(!name || !email || !password){
            throw new Error("Enter all necessary information for registration")
        }

        if(email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        if(password.length < 6) {
            throw new Error("The password must contain at least 6 characters")
        }

        const id = this.idGenerator.generateId()

        const hashPassword = await this.hashManager.hash(password)

        await this.userDatabase.createUser(
            id,
            name,
            email,
            hashPassword,
            role
        )

        const token = this.authenticator.generateToken({id, role})

        return token
    }

    public async login(userData: LoginInputDTo): Promise<string> {
        if(!userData.email || !userData.password){
            throw new Error("Enter all necessary information for login")
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        const user = await this.userDatabase.getUserByEmail(userData.email)

        const compareResult = await this.hashManager.compare(userData.password, user.getPassword())

        if(!compareResult){
            throw new Error("Invalid username or password")
        }

        const token = this.authenticator.generateToken({id: user.getId(), role: user.getRole()})
        console.log(user.getId())
        console.log(user.getRole())
        return token
    }
}
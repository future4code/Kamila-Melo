import { USER_ROLES } from "../data/UserDatabase";

export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ){}

    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    getPassword() {return this.password}
    getRole() {return this.role}

    setId(id: string) {this.id = id}
    setName(name: string) {this.name = name}
    setEmail(email: string) {this.email = email}
    setPassword(password: string) {this.password = password}
    setRole(role: USER_ROLES) {this.role = role}

    static convertToUserModel(user: any): User{
        return new User(user.id, user.name, user.email, user.password, user.role)
    }
}

export interface LoginInputDTo{
    email: string,
    password: string
}
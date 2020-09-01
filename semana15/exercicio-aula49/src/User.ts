export class User {
    private name: string;
    private id: string;
    private email: string;
    private password: string

    constructor(name: string, id: string, email: string, password: string){
        console.log("Chamando o construtor da classe User")
        this.name = name,
        this.id = id,
        this.email = email,
        this.password = password
    }

    public getId(): string{
        return this.id
    }

    public getName(): string{
        return this.name
    }

    public getEmail(): string{
        return this.email
    }

    public introducerYourself(): string{
        return `Olá, sou ${this.name}. Bom dia!`
    }

}
import { User } from "./User"

export class Customer extends User{
    private creditCard: string
    public purchaseTotal: number = 0

    constructor(name: string, id: string, email: string, password: string, creditCar: string){
        super(name, id, email, password)
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCar
    }

    public getCreditCard(): string{
        return this.creditCard
    }
}
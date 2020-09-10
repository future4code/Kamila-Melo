import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class ComercialClient extends Commerce implements Client{
    constructor(
        private Cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
        ){
        super(floorsQuantity, cep)
    }

    getCnpj(): string{
        return this.Cnpj
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }
}
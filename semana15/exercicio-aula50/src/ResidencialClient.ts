import { Residence } from "./Residence"
import { Client } from "./Client"

export class ResidencialClient extends Residence implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private Cpf: string,
        residentsQuantity: number,
        cep: string
        ){
        super(residentsQuantity, cep)
    }

    getCpf(): string{
        return this.Cpf
    }

    public calculateBill(): number{
        return this.consumedEnergy * 0.75
    }

}
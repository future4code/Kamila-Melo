import { Employee } from "./Employee";

export class Saller extends Employee{
    private salesQuantity: number = 0
    static SELLING_COMMISSION: number = 5

    public getSalesQuantity(): number{
        return this.salesQuantity
    }

    public setSalesQuantity(value: number): void{
        this.salesQuantity = value
    }

    public calculateTotalSalary(): number{
        return this.baseSalary + this.getBenefits() + Saller.SELLING_COMMISSION * this.salesQuantity
    }
}
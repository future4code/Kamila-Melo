import { User } from "./User";

export class Employee extends User{
    protected admissionDate: string
    protected baseSalary: number
    static BENEFITS_VALUE: number = 400

    constructor(name: string, id: string, email: string, password: string, admissionDate: string, baseSalary: number){
        super(name, id, email,password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getBenefits(): number{
        return Employee.BENEFITS_VALUE
    }

    public getAdmissionDate(): string{
        return this.admissionDate
    }

    public getBaseSalary(): number{
        return this.baseSalary
    }

    public calculateTotalSalary(): number{
        return this.baseSalary += Employee.BENEFITS_VALUE
    }

}
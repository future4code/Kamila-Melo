//EXERCÍCIO 1
//LETRA A: O constructor serve termos as ações que devem ser executadas ao criar uma instância da classe. Chamamos a partir do this.
//LETRA B: Foi impressa uma vez.

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

// const kamila: UserAccount = new UserAccount('111.111.111-11', 'Kamila', 32)

// console.log(kamila)

//LETRA C: Através dos getters e setters


//EXERCÍCIO 2

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//        balance: number,
//        transactions: Transaction[]
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//        this.balance = balance;
//        this.transactions = transactions
//     }

//     public getCpf():string{
//         return this.cpf
//     }

//     public getName():string{
//         return this.name
//     }

//     public getAge():number{
//         return this.age
//     }

//     public getBalance():number{
//         return this.balance
//     }

//     public getTransactions():Transaction[]{
//         return this.transactions
//     }

//     public setCpf(cpf: string){
//         return this.cpf
//     }

//     public setName(name: string){
//         return this.name
//     }

//     public setAge(age: number){
//         return this.age
//     }

//     public setBalance(balance: number){
//         return this.balance
//     }

//     public setTransactions(transactions: Transaction[]){
//         return this.transactions
//     }
  
//   }

// class Transaction{
//     private date: string;
//     private value: number;
//     private description: string;

//     constructor(date: string, value: number, description: string){
//         this.date = date
//         this.value = value
//         this.description = description
//     }

//     public getDate(): string {
//         return this.date
//     }

//     public getValue(): number {
//         return this.value
//     }

//     public getDescription(): string {
//         return this.description
//     }

//     public setDate(date: string): string {
//         return this.date
//     }

//     public setValue(value: number): number {
//         return this.value
//     }

//     public setDescription(description: string): string {
//         return this.description
//     }
// }

// const information: any = new Transaction("31/08/2020", 100, "Saldo Atual")

// const kamila: UserAccount = new UserAccount('111.111.111-11', 'Kamila', 32, 100, [information.getDate(),information.getValue(), information.getDescription()])

// console.log(kamila)

//EXERCÍCIO 3
//E
//EXERCÍCIO 4
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       balance: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.balance = balance;
       this.transactions = transactions
    }

    public getCpf():string{
        return this.cpf
    }

    public getName():string{
        return this.name
    }

    public getAge():number{
        return this.age
    }

    public getBalance():number{
        return this.balance
    }

    public getTransactions():Transaction[]{
        return this.transactions
    }

    public setCpf(cpf: string){
        return this.cpf
    }

    public setName(name: string){
        return this.name
    }

    public setAge(age: number){
        return this.age
    }

    public setBalance(balance: number){
        return this.balance
    }

    public setTransactions(transactions: Transaction[]){
        return this.transactions
    }
  
  }

class Transaction{
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string){
        this.date = date
        this.value = value
        this.description = description
    }

    public getDate(): string {
        return this.date
    }

    public getValue(): number {
        return this.value
    }

    public getDescription(): string {
        return this.description
    }

    public setDate(date: string): string {
        return this.date
    }

    public setValue(value: number): number {
        return this.value
    }

    public setDescription(description: string): string {
        return this.description
    }
}

import {JSONFileManager} from './JSONFileManager'

class Bank {
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;
  
    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
      this.accounts = accounts;
      this.fileManager = new JSONFileManager("data.json")
    }

    public getAccounts():UserAccount[]{
        return this.accounts
    }

    public setAccounts(accounts: UserAccount):any{
        return this.accounts
    }
  
}

const information: any = new Transaction("31/08/2020", 100, "Saldo Atual")

const kamila: UserAccount = new UserAccount('111.111.111-11', 'Kamila', 32, 100, [information.getDate(),information.getValue(), information.getDescription()])


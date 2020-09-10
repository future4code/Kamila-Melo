//EXERCÍCIO 1
//LETRA A: Não seria possível imprimir a senha, pois ela é privada e não possui um método get
//LETRA B: Foi impressa uma vez. Pois foi criada somente uma instância.

//EXERCÍCIO 2
//LETRA A: Foi impressa uma vez. Pois foi criada somente uma instância.
//LETRA B: Foi impressa duas vezes. Pois foi criada uma instância da classe Customer que se extende da classe User.

//EXERCÍCIO 3
//LETRA A: Não seria possível imprimir, pois o password é uma propriedade herdada da classe User e nessa classe ela é privada.

//EXERCÍCIO 6
//LETRA A: Foi impressa 3 vezes.
//LETRA B: Nome, id, e-mail, data de admissão, salário base, mensagem introdutória

//EXERCÍCIO 7
//LETRA A: Nome, id, e-mail, senha, data de admissão e base salarial
//LETRA B: Consegui imprimir: Nome, id, e-mail, data de admissão, base salarial, total do salário com benefícios e mensagem introdutória.
//Não consegui imprimir: senha. Por se tratar de uma propriedade privada da classe user.

//EXERCÍCIO 9
//LETRA A: Não é possível imprimir o valor pois se trata de uma propriedade private. Só é possível imprimir o valor usando um getter.

//EXERCÍCIO 10
//LETRA A: Foi impresso "Chamando o construtor da classe user" e o resultado da operação. Pois a classe Seller é filha da classe Employee, que por sua vez é filha da classe User.

import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Saller } from "./Seller";

const user: User = new User('Kamila', "1", "kamila@gmail.com", "123")

console.log( user.getName(), user.getId(), user.getEmail() )

const customer: Customer = new Customer( 'Astrodev', '2', 'astrodev@gamail.com', '456', '666.666')

console.log(customer.getId(), customer.getName(), customer.getEmail(), customer.purchaseTotal, customer.getCreditCard())

console.log(customer.introducerYourself())

const employee: Employee = new Employee("Zeca", "3", "zeca@gmail.com", "789", "11/08/2008", 1000)

console.log(employee.getName(), employee.getId(), employee.getEmail(),employee.getAdmissionDate(),employee.getBaseSalary(),employee.introducerYourself())

console.log(employee.calculateTotalSalary())

const saller: Saller = new Saller("João", "4", "joao@gmail.com", "1122", "10/05/1990", 2000 )

console.log(saller.getName())

console.log(saller.getId())

console.log(saller.getEmail())

console.log(saller.getAdmissionDate())

console.log(saller.getBaseSalary())

console.log(saller.calculateTotalSalary())

console.log(saller.introducerYourself())

saller.setSalesQuantity(5)

console.log(saller.getSalesQuantity())

const sallerJhon: Saller = new Saller("Jhon", "5", "jhon@gmail.com", "3344", "17/06/2018", 1500)

sallerJhon.setSalesQuantity(10)

console.log(sallerJhon.calculateTotalSalary())
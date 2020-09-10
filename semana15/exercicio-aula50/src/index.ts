//EXERCICIO 1
//LETRA A: Consegui imprimir todas as propriedades (nome, número do registro, consumo de energia e o cálculo da conta). Foi possível devido a interface
// ter seus atributos e métodos como públicos

//EXERCÍCIO 2
//LETRA A: Erro "Cannot create an instance of an abstract class". Não é possível criar uma instância de uma classe abstrata.
//LETRA B: Criar outra classe que se extenda dessa.

//EXERCÍCIO 4
//LETRA A: As próprias e as da interface Client e da Classe Residence. Porque se extende e implementa a elas.

//EXERCICIO 5
//LETRA A: Também se implementa a interface Client
//LETRA B: Se extende a Classe Commerce ao invés da Classe Residence

//EXERCICIO 6
//LETRA A: Filha da Classe Industry.
//LETRA B: interface Client.
//LETRA C: Pois são dados que não queremos que sejam alterados. Podem ser somente vizualizados.

import { Client } from "./Client";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ClientManager } from "./ClientManager";

const client: Client = {
  name: 'Kamila',
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill():number {
    return 2
  }
}

console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

const residence: Residence = new Residence(4, "35164-215")

const commerce: Commerce = new Commerce(2, "35162-114")

const industry: Industry = new Industry(5, "35160-240")

console.log(residence.getCep())

console.log(commerce.getCep())

console.log(industry.getCep())

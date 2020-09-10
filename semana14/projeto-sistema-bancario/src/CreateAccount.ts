import fs from 'fs'
import { readDatabase } from '.'
import moment from 'moment'

moment.locale("pt-br")

type Client = {
   name: string,
   CPF: string,
   dateOfBirth: string
}

// type Balance = {
//         value: number,
//         date: moment.Moment,
//         description: string
// }


function createAccount(client: Client): void {
    const today = moment()
    const dateBirth = moment(client.dateOfBirth, "DD/MM/YYYY")
    const diffInYears = today.diff(dateBirth, "years")
    if(diffInYears > 18) {
        const fileData: string = fs.readFileSync('./data.json').toString() //Transforma o arquivo em string e guarda dentro da variável
        const allClients = JSON.parse(fileData) //Transforma em um array e retorna
        allClients.push(client) //Adiciona valores informados dentro do array
        fs.writeFileSync('./data.json', JSON.stringify(allClients, null, 2)) //Parâmetros para identar o texto
        console.log("Conta cadastrada!")
        
    } 
    else{
        console.log("Idade menor que 18 anos. Não é possível criar conta")
    }
    
}

createAccount({name: "Fulana", CPF: "222.111.111-11", dateOfBirth: "25/10/1999"})
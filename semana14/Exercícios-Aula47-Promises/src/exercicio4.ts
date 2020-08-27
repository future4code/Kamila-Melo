//LETRA A: Tipo void. Porque é uma função que não retorna nada.

//LETRA B:
import axios from 'axios'
import moment, { Moment } from 'moment'

moment.locale("pt-br")

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const createNews = async(title:string, content: string, date: Moment): Promise<void> => {
    try{
        await axios.put(`${baseUrl}/news`, {
            title,
            content,
            date
        })
        console.log("Notícia criada com sucesso")
    }catch{
        console.log("Erro ao criar notícia")
    }
}

const main = async() => {
    await createNews("Torneio de Valorant", "irá acontecer no final dessa semana um torneio de Valorant", moment("28/08/2020", "DD/MM/YYYY"))
}

main()
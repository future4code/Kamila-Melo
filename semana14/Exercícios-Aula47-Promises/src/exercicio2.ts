//LETRA A: Função nomeada vem com o async antes da palavra function, após abre e fecha parênteses e abre e fecha chaves
//arrow function começa declarando uma variável e depois do igual se colocar o async seguindo o tipo da função e uma seta

//LETRA B:
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const getSubscribers = async (): Promise<any[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(subscribers.data)
    return subscribers.data
}

const main = async() => {
    const allSubscribers = await getSubscribers()
    console.log(allSubscribers)
}

main()
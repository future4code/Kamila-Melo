//LETRA A: Não teremos nenhum erro pois estamos fazendo a tipagem de acordo com o array subscribers que criamos

//LETRA B: Para que possamos enviar para o frontend somente aquilo que interessa

//LETRA C:
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type subscribers = {
    id: string,
    name: string,
    email: string
}
const getSubscribers = async (): Promise<subscribers[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    return subscribers.data.map((subscriber:any)=>{
        return{
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        }
    })
}

const main = async() => {
    const allSubscribers = await getSubscribers()
    console.log(allSubscribers)
}

main()
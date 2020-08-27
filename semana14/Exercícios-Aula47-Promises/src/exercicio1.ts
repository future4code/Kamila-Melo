//LETRA A: Usaria o endpoint GET /subscribers/all
//LETRA B: Indicamos como Promise<any[]>
//LETRA C:
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function getSubscribers (): Promise<any[]>{
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    return subscribers.data
}

async function main(){
    const result = await getSubscribers()
    console.log(result)
}

main()
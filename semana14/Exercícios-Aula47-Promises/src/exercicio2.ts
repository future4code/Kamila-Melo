//LETRA A: 

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
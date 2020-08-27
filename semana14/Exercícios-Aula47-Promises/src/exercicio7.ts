import axios from 'axios'
import moment, { Moment } from 'moment'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const createSubscribe = async(name: string, email:string): Promise<void> => {
    try{
        await axios.put(`${baseUrl}/subscribers`,{
            name,
            email
        })
        console.log("Inscrito com sucesso!")
    }
    catch(e){
        console.log(e.response.data)
    }
}

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

type subscribers = {
    id: string,
    name: string,
    email: string
}

const getSubscribers = async(): Promise<subscribers[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    return subscribers.data.map((subscriber:subscribers)=>{
        return{
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        };
    });
};

const sendNotifications = async(subscribers: subscribers, message: string): Promise<void> => {
    await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: subscribers.id,
            message
        }) 
    }

type News = {
    id: string,
    subscriberId: string,
    message: string
}

const getNotifications = async(subscriberId: string): Promise<News[]> => {
    const res = await axios.get(`${baseUrl}/subscribers/${subscriberId}/notifications/all`)
        return res.data.map((news: News)=>{
            return{
                subscriberId: news.subscriberId,
                message: news.message
            }
        })
}


const main = async() => {
    try{
        await createSubscribe("Kamila", "kamila@gmail.com")

        await createNews("Torneio de Valorant 2", "irá acontecer no final dessa semana um torneio de Valorant", moment("29/08/2020", "DD/MM/YYYY"))

        const users = await getSubscribers()

        const promisesArray = []
        for(const user of users){
            promisesArray.push(
                sendNotifications(user,"Veja sobre o torneio 2")
            )
        }

        await Promise.all(promisesArray)

        const allNotifications = []
        for(const user of users){
            allNotifications.push(
                getNotifications(user.id)
            )
        }

        const promiseAllResult = await Promise.all(allNotifications);

    }
    catch (e){
        console.log(e.response.data)
    }
}

main()
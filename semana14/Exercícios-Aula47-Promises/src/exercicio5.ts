//LETRA A:

//LETRA B:
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type subscribers = {
    id: string,
    name: string,
    email: string
}

const getSubscribers = async(): Promise<subscribers[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    return subscribers.data.map((subscriber:any)=>{
        return{
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        };
    });
};

type news = {
    id: string,
    subscriberId: string,
    message: string
}

const getNotifications = async(): Promise<any> => {
    const users = await getSubscribers()
    for(let user of users){
        const notifications = await axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
        return notifications.data.map((res:any)=>{
            return{
                id: res.id,
                subscriberId: res.subscriberId,
                message: res.message
            }
        })
    }
}

const sendNotifications = async(subscribers: subscribers, message: string): Promise<void> => {
    await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: subscribers.id,
            message
        }) 
    }


const main = async() => {
    await sendNotifications("","Notícia")
    const allNotifications = await getNotifications()
    console.log(allNotifications)
}

main()
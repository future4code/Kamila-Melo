import dotenv from "dotenv";
import express from 'express'
import { AddressInfo } from "net";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

dotenv.config()

const app = express()
app.use(express.json())

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/profile', getUserProfile);


const server = app.listen(process.env.PORT || 3000, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})
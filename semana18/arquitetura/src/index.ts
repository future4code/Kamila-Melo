import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { deleteUser } from "./endpoints/deleteUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signup";

dotenv.config()

const app = express();
app.use(express.json());

app.put("/signup", signUp)
app.post("/login", login)
app.get("/all", getAllUsers)
app.delete("/:id", deleteUser)
   

    const server = app.listen(process.env.PORT || 3000, () => {
        if(server){
            const address = server.address() as AddressInfo
            console.log(`Server is running in http://localhost:${address.port}`)
        }else{
            console.error(`Failure upon starting server.`)
        }
    })
import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function CreateTripPage (){

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-melo-turing"

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null){
            history.push("/login")
        }else{
            getTripCreate()
        }
    },[history])

    const getTripCreate = () => {
        const token = window.localStorage.getItem("token")

        axios.post(`${baseUrl}/trips`, {headers:{
            auth: token
            }
        }).then( response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.message)
        })
    }

    return(
        <div>
            <Header />
            <p>Criar viagem</p>
        </div>
    )   
}

export default CreateTripPage
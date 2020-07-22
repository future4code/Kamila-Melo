import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function TripDetailsPage (){

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-melo-turing"

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null){
            history.push("/login")
        }else{
            getTripDetail()
        }
    },[history])

    const getTripDetail = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}/trip/N5FKzeTW1pjCupX1zbra`, {headers:{
            auth: token
            }
        }).then( response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const hangleLogout = () => {
        window.localStorage.clear()
        history.push("/login")
    }

    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    return(
        <div>
            <Header />
            <p>Detalhes da viagem</p>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={hangleLogout}>Logout</button>
        </div>
    )
}

export default TripDetailsPage
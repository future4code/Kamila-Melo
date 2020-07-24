import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import styled from 'styled-components'


const CardTrip = styled.div`
    border: 1px solid black;
    width: 25%;
    text-align: center;
    margin: 0 auto;
    padding: 16px;
    margin: 16px;
    height: 40vh;
`

const CardTripContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ButtonDetails = styled.button`
    width: 40%;
    height: 35px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    position: relative;
    bottom: -50px;
    cursor: pointer;
`

const H1 = styled.h1`
    text-align: center;
`

const ButtonCreateTrip = styled.button`
    position: relative;
    right: -50px;
    justify-content: baseline;
    width: 5%;
    height: 35px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 16px;
`

function ListTripsPage(props){
    const history = useHistory()

    const [trips, setTrips] = useState ([])

    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    useEffect(() => {
        handleTrips()
    },[])

    const handleTrips = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-turing/trips').then(response => {
            setTrips(response.data.trips)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const onClickDetails = tripId => {
        history.push(`/trips/details/${tripId}`)
    }

    return(
        <div>
            <Header />
            <ButtonCreateTrip onClick={goToCreateTripPage}>Criar Viagem</ButtonCreateTrip>
            <H1>Lista de Viagens</H1>
            <CardTripContainer>
            {trips.map(trip => {
                return(
                    <CardTrip key = {trip.id}>
                        <p><strong>Nome: </strong>{trip.name}</p>
                        <p><strong>Planeta: </strong>{trip.planet}</p>
                        <p><strong>Descrição: </strong>{trip.description}</p>
                        <p><strong>Data: </strong>{trip.date}</p>
                        <p><strong>Duração: </strong>{trip.durationInDays} dias</p>
                        <ButtonDetails onClick={() => onClickDetails(trip.id)}>Detalhes da viagem</ButtonDetails>
                    </CardTrip>
                    
                )
            })}
            </CardTripContainer>
        </div>
    )
}

export default ListTripsPage
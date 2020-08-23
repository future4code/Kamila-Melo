import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'

const CardTrip = styled.div`
    width: 88%;
    text-align: center;
    margin: 0 auto;
    padding: 16px;
`

const CardCandidate = styled.div`
    border: 1px solid black;
    width: 20%;
    text-align: center;
    margin: 0 auto;
    padding: 16px;
`

const CardApproved = styled.div`
    border: 1px solid black;
    width: 20%;
    text-align: center;
    margin: 0 auto;
    padding: 16px;
`

const ButtonReject = styled.button`
    width: 20%;
    height: 35px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
`

const ButtonAccept = styled.button`
    width: 20%;
    height: 35px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
`

const TripDetailContainer = styled.div`
    text-align: center;
    height:120vh;
`

const CardCandidates = styled.div`
    display: flex;
`

const CardApproveds = styled.div`
    display: flex;
`

const P = styled.p`
    width: 20%;
`

const ButtonListTrips = styled.button`
    position: relative;
    left: -850px;
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

function TripDetailsPage (props){
    const [tripDetail, setTripDetail] = useState([{}])
    const [candidates, setCandidates] = useState()
    const [approved, setApproved] = useState()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-turing"

    const history = useHistory()
    const params = useParams()

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

        axios.get(`${baseUrl}/trip/${params.tripId}`, {headers:{
            auth: token
            }
        }).then( response => {
            setTripDetail(response.data.trip)
            setCandidates(response.data.trip.candidates)
            setApproved(response.data.trip.approved)
        }).catch(error => {
            console.log(error.message)
        })
    }


    const onClickReject = (candidateId) => {
        const body = {
            "approve": false
        }
        const token = window.localStorage.getItem("token")

        axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {headers:{
            auth: token
        }}).then(()=> {
            window.location.reload()
        }).catch(error => {
            alert("Deu ruim")
        })
        
    }

    const onClickApproved = (candidateId) => {
        const body = {
            "approve": true
        }
        const token = window.localStorage.getItem("token")

        axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {headers:{
            auth: token
        }}).then(()=> {
            window.location.reload()
        }).catch(error => {
            alert("Deu ruim")
        })
    }

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    return(
        <TripDetailContainer>
            <Header />
            <ButtonListTrips onClick={goToListTripsPage}>Lista de Viagens</ButtonListTrips>
            <h1>Detalhes da viagem</h1>
            <CardTrip>
                <P><strong>Planeta: </strong>{tripDetail.planet}</P>
                <P><strong>Nome: </strong>{tripDetail.name}</P>
                <P><strong>Descrição: </strong>{tripDetail.durationInDays} dias</P>
                <P><strong>Data prevista: </strong>{tripDetail.date}</P>
            </CardTrip>
            <h1>Candidatos:</h1>
            <CardCandidates>
            {candidates && candidates.map(candidate => {
                    return (
                        <CardCandidate>
                            <p><strong>Nome: </strong>{candidate.name}</p>
                            <p><strong>Idade: </strong>{candidate.age} anos</p>
                            <p><strong>País: </strong>{candidate.country}</p>
                            <props><strong>Motivo: </strong>{candidate.applicationText}</props>
                            <p><strong>Profissão: </strong>{candidate.profession}</p>
                            <ButtonReject onClick={() => onClickReject(candidate.id)}>Rejeitar</ButtonReject>
                            <ButtonAccept onClick={() => onClickApproved(candidate.id)}>Aprovar</ButtonAccept>
                        </CardCandidate>
                    
                    )
                })}
            </CardCandidates>
            <h1>Aprovados:</h1>
            <CardApproveds>
            {approved && approved.map(approved => {
                    return (
                        <CardApproved>
                            <p><strong>Nome: </strong>{approved.name}</p>
                            <p><strong>Idade: </strong>{approved.age}</p>
                            <p><strong>País: </strong>{approved.country}</p>
                            <p><strong>Motivo: </strong>{approved.applicationText}</p>
                            <p><strong>Profissão: </strong>{approved.profession}</p>
                        </CardApproved>
                    
                    )
                })}
            </CardApproveds>
        </TripDetailContainer>
    )
}

export default TripDetailsPage
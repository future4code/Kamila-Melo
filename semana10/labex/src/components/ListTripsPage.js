import React from 'react'
import {useHistory} from 'react-router-dom'

function ListTripsPage(){
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    const goToTripDetailsPage = () => {
        history.push("/trips/details")
    }

    return(
        <div>
            <p>ListTripsPage</p>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToTripDetailsPage}>Detalhes da viagem</button>
        </div>
    )
}

export default ListTripsPage
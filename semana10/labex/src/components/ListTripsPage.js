import React from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function ListTripsPage(){
    const history = useHistory()

  
    

    return(
        <div>
            <Header />
            <p>ListTripsPage</p>
            
        </div>
    )
}

export default ListTripsPage
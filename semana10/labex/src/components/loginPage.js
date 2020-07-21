import React from 'react'
import {useHistory} from 'react-router-dom'

function LoginPage (){
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
            <h1>Login</h1>
            <div>
                <label>E-mail: </label>
                <input type='text'/>
            </div>
            <div>
                <label>Senha: </label>
                <input type='password'/>
            </div>
            <button onClick={goToListTripsPage}>Entrar</button>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}

export default LoginPage
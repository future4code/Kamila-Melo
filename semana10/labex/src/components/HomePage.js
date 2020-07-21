import React from 'react'
import Header from './Header'
import {useHistory} from 'react-router-dom'

function HomePage () {
    const history = useHistory()

    const goToFormPage = () => {
        history.push("/application-form")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return(
        <div>
            <Header/>
            <p>Home</p>
            <button onClick={goToFormPage}>Fazer inscrição</button>
            <button onClick={goToLoginPage}>Entar como administrador</button>
        </div>
    )
}

export default HomePage
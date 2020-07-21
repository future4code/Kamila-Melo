import React from 'react'
import {useHistory} from 'react-router-dom'

function ApplicationFormPage(){
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
            <h1>Inscrição</h1>
            <div>
                <label>Viagem: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Nome: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Idade: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Motivo: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>profissão: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>País: </label>
                <input type="text"></input>
            </div>
            <button>Confirmar inscrição</button>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}

export default ApplicationFormPage
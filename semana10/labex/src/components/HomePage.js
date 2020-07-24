import React from 'react'
import HeaderHome from './HeaderHome'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const ButtonLogin = styled.button`
    height: 1000px;
`

function HomePage () {
    const history = useHistory()

    const goToFormPage = () => {
        history.push("/application-form")
    }

    return(
        <div>
            <HeaderHome />
            <p>Home</p>
            <button onClick={goToFormPage}>Inscrever-se</button>
        </div>
    )
}

export default HomePage
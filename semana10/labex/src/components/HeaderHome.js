import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const DivHeader = styled.div`
    background-color: #3f48cc;
    color: white;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonHeader = styled.button`
    position: relative;
    right: -800px;
    justify-content: baseline;
    width: 5%;
    height: 35px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
`

function HeaderHome () {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    return(
        <DivHeader>
            <h1>LabeX</h1>
            <ButtonHeader onClick={goToLoginPage}>Fazer Login</ButtonHeader>
        </DivHeader>
    )
}

export default HeaderHome
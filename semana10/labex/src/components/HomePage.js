import React from 'react'
import HeaderHome from './HeaderHome'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'


const ButtonInsc = styled.button`
    width: 10%;
    height: 35px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 32px;
    position: relative;
    bottom: -400px;
    right: -850px;
`

const P = styled.p`
    font-weight: bold;
    font-size: 50px;
    position: relative;
    top: 200px;
`

const Div = styled.div`
    text-align: center;
`

function HomePage () {
    const history = useHistory()

    const goToFormPage = () => {
        history.push("/application-form")
    }

    return(
        <div>
            <HeaderHome />
            <Div>
                <P>Que tal uma viagem espacial para brincar com os ETs mais legais do espaço?</P>
                <P>Inscreva-se para uma de nossas viagens!</P>
            </Div>
            <ButtonInsc onClick={goToFormPage}>Inscrever-se</ButtonInsc>
        </div>
    )
}

export default HomePage
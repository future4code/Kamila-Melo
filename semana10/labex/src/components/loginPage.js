import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import styled from 'styled-components'

const ContainerLogin = styled.div`
    width: 100%;
    text-align: center;
    background-color: #3f48cc;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`

const DivLogin = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 15%;
    text-align: left;
    margin: 0 auto;
    padding: 32px;
    border-radius: 16px;
`

const InputLogin = styled.input`
    width: 100%;
    height: 25px;
    border: 1px solid #993399;
    outline: none;
`

const DivButtons = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivPassword = styled.div`
    margin-top: 32px;
`

const ButtonLogin = styled.button`
    width: 40%;
    height: 35px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
`

const ButtonHome = styled.button`
    height: 35px;
    width: 40%;
    margin-top: 15px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
`

const LabelLogin = styled.label`
    color: #993399;
    font-weight: 500;
`

const H1 = styled.h1`
    color: white;
    margin-top: 20vh;
    font-size: 40px;
    font-family: sans-serif;
`

function LoginPage (){

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-melo-turing"

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goToHomePage = () => {
        history.push("/")
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${baseUrl}/login`,body).then((response)=>{
            window.localStorage.setItem("token", response.data.token)
            history.push("/trips/details")
        }).catch((error) => {
            alert("Seu usuário ou senha estão incorretos.")
        })
    }

    return(
        <ContainerLogin>
            <H1>Login</H1>
            <DivLogin>
                <div>
                    <LabelLogin>E-mail: </LabelLogin>
                    <InputLogin type='text' value={email} onChange={onChangeEmail}/>
                </div>
                <DivPassword>
                    <LabelLogin>Senha: </LabelLogin>
                    <InputLogin type='password' value={password} onChange={onChangePassword}/>
                </DivPassword>
                <DivButtons>
                    <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                    <ButtonHome onClick={goToHomePage}>Home</ButtonHome>
                </DivButtons>
            </DivLogin>
        </ContainerLogin>
    )
}

export default LoginPage
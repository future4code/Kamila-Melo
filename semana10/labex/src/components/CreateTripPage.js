import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import useForm from './useForm'
import styled from 'styled-components'

const H1 = styled.h1`
    text-align: center;
`

const Form = styled.form`
    background-color: white;
    border: 1px solid black;
    width: 15%;
    text-align: left;
    margin: 0 auto;
    padding: 32px;
    border-radius: 16px;
`

const LabelForm = styled.label`
    color: #993399;
    font-weight: 500;
`

const InputForm = styled.input`
    width: 100%;
    height: 25px;
    border: 1px solid #993399;
    outline: none;
`

const SelectForm = styled.select`
    width: 100%;
    height: 25px;
    border: 1px solid #993399;
    outline: none;
    color: #993399;
`

const Div = styled.div`
    margin-top: 32px;
`

const ButtonCreate = styled.button`
    width: 40%;
    height: 35px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 32px;
`

const DivButton = styled.div`
    text-align: center;
`

const ButtonListTrips = styled.button`
    width: 6%;
    height: 35px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 32px;
`

function CreateTripPage (){
    const { form, onChange } = useForm({
        nome: "",
        planeta: "",
        data: "",
        descricao: "",
        duracao: ""
      });

      const history = useHistory()

      const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-turing"

      const handleInputChange = event => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const goToListTripsPage = () => {
        history.push("/trips/list")
    }

      const handleSave = event => {
        event.preventDefault();
        const token = window.localStorage.getItem("token")
        const body = {
            "name": form.nome,
            "planet": form.planeta,
            "date": form.data,
            "description": form.descricao,
            "durationInDays": form.duracao
        }
        axios.post(`${baseUrl}/trips`,body,{headers: {
            auth: token
        }}).then(response => {
            alert("Viagem cadastrada!")
            history.push("/trips/list")
        }).catch(error => {
            console.log(error.message)
        })
      };

      useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null){
            history.push("/login")
        }
    },[history])
    
    const today = new Date().toLocaleDateString('pt-BR') 

    return(
        <div>
            <Header />
            <H1>Criar Viagem</H1>
            <Form onSubmit={handleSave}>
                <div>
                    <LabelForm>Nome: </LabelForm>
                    <InputForm 
                        name="nome"
                        pattern={"[A-Za-z]{5,}"}
                        title="O nome deve ter no mínimo 5 letras"
                        value={form.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <Div>
                    <LabelForm>Planeta: </LabelForm>
                    <SelectForm name="planeta" value= {form.planeta} onChange={handleInputChange}>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                    </SelectForm>
                </Div>
                <Div>
                    <LabelForm>Data: </LabelForm>
                    <InputForm 
                        name="data"
                        type="date"
                        min={today}
                        value={form.data}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>Descrição: </LabelForm>
                    <InputForm 
                        name="descricao"
                        pattern={"[A-Za-z]{30,}"}
                        title="O motivo deve ter no mínimo 30 letras"
                        value={form.descricao}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>Duração: </LabelForm>
                    <InputForm 
                        name="duracao"
                        type="number"
                        min="50"
                        value={form.duracao}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <DivButton>
                    <ButtonCreate>Criar</ButtonCreate>
                </DivButton>
            </Form>
            <DivButton>
                <ButtonListTrips onClick={goToListTripsPage}>Lista de Viagens</ButtonListTrips>
            </DivButton>
        </div>
    )   
}

export default CreateTripPage
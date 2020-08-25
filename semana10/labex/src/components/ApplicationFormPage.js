import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderHome from './HeaderHome'
import axios from 'axios'
import useForm from './useForm'
import Countries from './Countries'
import styled from "styled-components"

const ButtonInsc = styled.button`
    width: 40%;
    height: 35px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 32px;
`

const ButtonHome = styled.button`
    width: 6%;
    height: 35px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 32px;
    outline: none;
    margin-top: 32px;
`

const LabelForm = styled.label`
    color: #993399;
    font-weight: 500;
`

const Div = styled.div`
    margin-top: 32px;
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

const Form = styled.form`
    background-color: white;
    border: 1px solid black;
    width: 15%;
    text-align: left;
    margin: 0 auto;
    padding: 32px;
    border-radius: 16px;
`

const DivButton = styled.div`
    text-align: center;
`

const H1 = styled.h1`
    text-align: center;
`

function ApplicationFormPage(){
    const { form, onChange } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: ""
      });

      const handleInputChange = event => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-turing"

      const handleSave = event => {
        event.preventDefault();
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country,
        }
        axios.post(`${baseUrl}/trips/${form.trip}/apply`,body).then( () => {
            alert("Inscrição concluída!")
            window.location.reload()
        }).catch(error => {
            console.log(error)
        })
      };

    const history = useHistory()

    const [trips, setTrips] = useState ([])

    const goToHomePage = () => {
        history.push("/")
    }

    useEffect(() => {
        handleTrips()
    },[])

    const handleTrips = () =>{
        axios.get(`${baseUrl}/trips`).then(response => {
            setTrips(response.data.trips)
        }).catch(error => {
            console.log(error.message)
        })
    }

    console.log(form.name)
    console.log(form.age)
    console.log(form.applicationText)
    console.log(form.profession)
    console.log(form.country)
    console.log(form.trip)

    return(
        <div>
            <HeaderHome />
            <H1>Inscrição</H1>
            <Form onSubmit={handleSave}>
                <div>
                    <LabelForm>Escolha a sua viagem:</LabelForm>
                    <SelectForm
                        name="trip"
                        value={form.trip}
                        onChange={handleInputChange}
                        required
                    >
                        <option value={""}>Nenhuma</option>
                        {trips.map((trip) => {
                    return(
                        <option key={trip.id} value={trip.id}>
                            {trip.name} - {trip.planet}
                        </option>
                    )
                        })}
                    </SelectForm>
                </div>
                <Div>
                    <LabelForm>Nome: </LabelForm>
                    <InputForm 
                        name="name"
                        pattern={"[A-Za-z]{3,}"}
                        title="O nome deve ter no mínimo 3 letras"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>Idade: </LabelForm>
                    <InputForm 
                        name="age"
                        type="number"
                        min="18"
                        value={form.age}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>Motivo: </LabelForm>
                    <InputForm 
                        name="applicationText"
                        pattern={"[A-Za-z]{30,}"}
                        title="O motivo deve ter no mínimo 30 caracteres"
                        value={form.applicationText}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>Profissão: </LabelForm>
                    <InputForm 
                        name="profession"
                        pattern={"[A-Za-z]{5,}"}
                        title="O motivo deve ter no mínimo 10 caracteres"
                        value={form.profession}
                        onChange={handleInputChange}
                        required
                    />
                </Div>
                <Div>
                    <LabelForm>País: </LabelForm>
                    <SelectForm 
                        name="country"
                        value={form.country}
                        onChange={handleInputChange}
                        required
                    >
                        <Countries />
                    </SelectForm>
                    
                </Div>
                <DivButton>
                    <ButtonInsc>Confirmar</ButtonInsc>
                </DivButton>
                
                
            </Form>
            <DivButton>
                <ButtonHome onClick={goToHomePage}>Home</ButtonHome>
            </DivButton>
        </div>
    )
}

export default ApplicationFormPage
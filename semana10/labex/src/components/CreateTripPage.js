import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import useForm from './useForm'

function CreateTripPage (){
    const { form, onChange } = useForm({
        nome: "",
        planeta: "",
        data: "",
        descricao: "",
        duracao: ""
      });

      const handleInputChange = event => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const handleSave = event => {
        event.preventDefault();
        console.log("oi");
      };

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-melo-turing"

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null){
            history.push("/login")
        }else{
            getTripCreate()
        }
    },[history])

    const getTripCreate = () => {
        const token = window.localStorage.getItem("token")

        axios.post(`${baseUrl}/trips`, {headers:{
            auth: token
            }
        }).then( response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const today = new Date().toISOString().split("T")[0] 

    return(
        <div>
            <Header />
            <h1>Criar Viagem</h1>
            <form onSubmit={handleSave}>
                <div>
                    <label>Nome: </label>
                    <input 
                        name="nome"
                        pattern={"[A-Za-z]{5,}"}
                        title="O nome deve ter no mínimo 5 letras"
                        value={form.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Planeta: </label>
                    <select name="planeta" value= {form.planeta} onChange={handleInputChange}>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                    </select>
                </div>
                <div>
                    <label>Data: </label>
                    <input 
                        name="data"
                        type="date"
                        min={today}
                        value={form.data}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Descrição: </label>
                    <input 
                        name="descricao"
                        pattern={"[A-Za-z]{30,}"}
                        title="O motivo deve ter no mínimo 30 letras"
                        value={form.descricao}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Duração: </label>
                    <input 
                        name="duracao"
                        type="number"
                        min="50"
                        value={form.duracao}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button>Criar</button>
            </form>
        </div>
    )   
}

export default CreateTripPage
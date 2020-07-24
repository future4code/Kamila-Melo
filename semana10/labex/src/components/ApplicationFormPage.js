import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import useForm from './useForm'
import Countries from './Countries'

function ApplicationFormPage(){
    const { form, onChange } = useForm({
        nome: "",
        idade: "",
        motivo: "",
        profissao: "",
        pais: "",
        viagem: ""
      });

      const handleInputChange = event => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const handleSave = event => {
        event.preventDefault();
        console.log("oi");
      };


    const history = useHistory()

    const [trips, setTrips] = useState ([])
    const [tripsName, setTripsName] = useState("")

    const goToHomePage = () => {
        history.push("/")
    }

    useEffect(() => {
        handleTrips()
    },[])

    const changeTrips = (event) =>{
        setTripsName(event.target.value)
      }

    const handleTrips = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/kamila-melo-turing/trips').then(response => {
            setTrips(response.data.trips)
        }).catch(error => {
            console.log(error.message)
        })
    }

    return(
        <div>
            <Header />
            <h1>Inscrição</h1>
            <p>Escolha a sua viagem: </p>
            <form onSubmit={handleSave}>
                <div>
                    <select
                        name="viagem"
                        onChange={changeTrips}
                        value={form.viagem}
                        onChange={handleInputChange}
                        required
                    >
                        <option value={""}>Nenhuma</option>
                        {trips.map(trip => {
                    return(
                        <option key={trip.id} value={trip.id}>
                            {trip.name} - {trip.planet}
                        </option>
                    )
                        })}
                    </select>
                </div>
                <div>
                    <label>Nome: </label>
                    <input 
                        name="nome"
                        pattern={"[A-Za-z]{3,}"}
                        title="O nome deve ter no mínimo 3 letras"
                        value={form.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Idade: </label>
                    <input 
                        name="idade"
                        type="number"
                        min="18"
                        value={form.idade}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Motivo: </label>
                    <input 
                        name="motivo"
                        pattern={"[A-Za-z]{30,}"}
                        title="O motivo deve ter no mínimo 30 caracteres"
                        value={form.motivo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Profissão: </label>
                    <input 
                        name="profissao"
                        pattern={"[A-Za-z]{10,}"}
                        title="O motivo deve ter no mínimo 10 caracteres"
                        value={form.profissao}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>País: </label>
                    <Countries />
                </div>
                <button>Confirmar inscrição</button>
                <button onClick={goToHomePage}>Home</button>
            </form>
        </div>
    )
}

export default ApplicationFormPage
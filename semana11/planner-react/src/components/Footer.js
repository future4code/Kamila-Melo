import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import useForm from './useForm'
import axios from 'axios'

const FooterContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

const InputFooter = styled.input`
    height: 3vh;
    width: 15%;
    margin-right: 8px;
    outline: none;
`

const SelectFooter = styled.select`
    height: 3vh;
    width: 8%;
    margin-right: 8px;
    outline: none;
`

const ButtonFooter = styled.button`
    height: 3vh;
    width: 7%;
    border-radius: 16px;
    outline: none;
    background-color: rgb(2,20,68);
    font-weight: bold;
    color: white;
    border: none;
`

function Footer(){

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila"

    const { form, onChange } = useForm({
        text: "",
        day: "",
      });

      const handleInputChange = event => {
        const { name, value } = event.target;

        onChange(name, value);
      };

        const handleSave = event => {
            event.preventDefault();
            const body = {
                "text": form.text,
                "day": form.day,
            }
            if(form.day === ""){
                alert("Escolha um dia da semana")
              }else{
            axios.post(`${baseUrl}`,body).then(response => {
                alert("Tarefa cadastrada!")
                window.location.reload()
            }).catch(error => {
                alert("Erro ao cadastrar a tarefa")
            })
          };
        }

    return(
            <FooterContainer onSubmit={handleSave}>
                <InputFooter
                    name="text"
                    placeholder="Digite sua tarefa"
                    // pattern={"[A-Za-z]{5,}"}
                    title="O nome deve ter no mínimo 5 letras"
                    value={form.text}
                    onChange={handleInputChange}
                    required
                />
                <SelectFooter name="day" value= {form.day} onChange={handleInputChange}  data-testid="select-days">
                    <option value="">Nenhum</option>
                    <option value="Segunda">Segunda-feira</option>
                    <option value="Terça">Terça-feira</option>
                    <option value="Quarta">Quarta-feira</option>
                    <option value="Quinta">Quita-feira</option>
                    <option value="Sexta">Sexta-feira</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </SelectFooter>
                <ButtonFooter>Adicionar Tarefa</ButtonFooter>
            </FooterContainer>
    )
}

export default Footer
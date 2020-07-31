import React from "react";
import {
  render,
  wait
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";
import axios from 'axios'

describe("Renderização inicial", () => {
  test("Renderiza o input, o select e o button na tela", async () => {
    const {getByText, getByPlaceholderText,getByTestId} = render (<App />)

    const InputTask = getByPlaceholderText(/Digite sua tarefa/i);
    const SelectDays = getByTestId(/select-days/)
    const ButtonAdd = getByText(/Adicionar Tarefa/i)

    await userEvent.type(InputTask, 'Tarefa teste')
    userEvent.selectOptions(SelectDays, getByText("Nenhum"))
    userEvent.click(ButtonAdd)
  })
})


axios.get = jest.fn().mockResolvedValue({
  data: []
})
axios.post = jest.fn().mockResolvedValue()
axios.delete = jest.fn().mockResolvedValue()

describe("Lista de tarefas", () => {
  test('Testa a renderização inicial da lista de tarefas', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: '1',
        text: 'Tarefa1',
        day: "Terça"
      }]
    })

    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const InputTask = getByPlaceholderText (/Digite sua tarefa/)
    expect(InputTask).toBeInTheDocument()

    const ButtonAdd = getByText(/Adicionar Tarefa/i)
    expect(ButtonAdd).toBeInTheDocument()

    const tarefaLegal = await findByText("Tarefa1")
    expect(tarefaLegal).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila")
  })

  test('Testa a criação de tarefas', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: '1',
        text: 'Tarefa teste',
        day: "Segunda"
      }]
    })
    axios.post = jest.fn().mockResolvedValue()
    

    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const InputTasks = getByPlaceholderText (/Digite sua tarefa/)

    const SelectDays = getByTestId("select-days")

    const ButtonAdd = getByText(/Adicionar Tarefa/i)
    
    await userEvent.type(InputTasks, 'Tarefa Segunda')
    userEvent.selectOptions(SelectDays, "Segunda")
    userEvent.click(ButtonAdd)

    

    expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila", {
      day: "Segunda",
      text: "Tarefa Segunda"
    })

  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa1', day: "Segunda" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa2', day: "Terça" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa3', day: "Quarta" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa4', day: "Quinta" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa5', day: "Sexta" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa6', day: "Sábado" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

  test('Testa exclusão de uma tarefa', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: '1', text: 'Tarefa7', day: "Domingo" },
    ]
    })

    axios.delete = jest.fn().mockResolvedValue()
    
    const {getByPlaceholderText, getByText, findByText, getByTestId} = render (<App />)

    const ButtonDel = await findByText("X")
    expect(ButtonDel).toBeInTheDocument("X")
    userEvent.click(ButtonDel)

    expect(axios.delete).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila/1")
  })

})
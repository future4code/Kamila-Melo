import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

//NÚMERO 1 - COMPLETO
describe('Quando criar uma tarefa',() => {
  test('Ela deve aparecer na tela, com o mesmo texto',() => {
    const{getByPlaceholderText, getByText} = render (<App/>)

    const input = getByPlaceholderText('Novo post')
    const Botao = getByText('Adicionar')

    fireEvent.change(input, {target: {value: 'teste'}})
    fireEvent.click(Botao)

    expect(getByText('teste')).toBeInTheDocument()
  })


})


// //NÚMERO 2 - INCOMPLETO
// describe('Quando clicar no botão Curtir',() => {
//   test('Ele deve trocar o texto para Descurtir',() => {
//     const{getByTestId, getByText} = render (<App/>)

//     const Botao = getByTestId('like-button')

//     fireEvent.click(Botao)

//     expect(Botao).getByText('Descurtir')
//   })
// })


// //NÚMERO 3 - INCOMPLETO
// describe('Quando clicar no botão Apagar',() => {
//   test('O post deverá sumir da tela',() => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     const Botao = getByText('Adicionar')
//     const Botao2 = getByText('Apagar')

//     fireEvent.change(input, {target: {value: 'teste2'}})
//     fireEvent.click(Botao)
//     fireEvent.click(Botao2)


//     expect(getByText('teste2')).not.toBeInTheDocument()
//   })
// })

//NÚMERO 4 - COMPLETO
describe('Quando criar uma tarefa',() => {
  test('O input deve ser limpo',() => {
    const{getByPlaceholderText, getByText} = render (<App/>)

    const input = getByPlaceholderText('Novo post')
    const Botao = getByText('Adicionar')
    

    fireEvent.change(input, {target: {value: 'teste2'}})
    fireEvent.click(Botao)

    expect(input).toHaveValue("")
  })

})
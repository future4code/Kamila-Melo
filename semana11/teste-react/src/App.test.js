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


// //NÚMERO 2 - COMPLETO
// describe('Quando clicar no botão Curtir',() => {
//   test('Ele deve trocar o texto para Descurtir',() => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     fireEvent.change(input, {target: {value: 'Post'}})
//     const Botao2 = getByText('Adicionar')
//     fireEvent.click(Botao2)
//     const Botao = getByText("Curtir")
//     fireEvent.click(Botao)
//     expect(getByText(/Post/i)).toBeInTheDocument()
//     expect(getByText(/Descurtir/i)).toBeInTheDocument()
//   })
// })


// //NÚMERO 3 e 5 - COMPLETO
// describe('Quando clicar no botão Apagar',() => {
//   test('O post deverá sumir da tela',() => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     const Botao = getByText(/Adicionar/i)
//     fireEvent.change(input, {target: {value: 'teste2'}})
//     fireEvent.click(Botao)
//     const Botao2 = getByText(/Apagar/i)
//     fireEvent.click(Botao2)

//     expect(getByText(/Nenhum post/i)).toBeInTheDocument()
//   })
// })

// //NÚMERO 4 - COMPLETO
// describe('Quando criar uma tarefa',() => {
//   test('O input deve ser limpo',() => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     const Botao = getByText('Adicionar')
    

//     fireEvent.change(input, {target: {value: 'teste2'}})
//     fireEvent.click(Botao)

//     expect(input).toHaveValue("")
//   })

// })

// //NÚMERO 6
// describe("Quando houver pelo menos 1 post", () => {
//   test("Deve aparecer uma mensagem 'Quantidade de posts: 1'", () => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     const Botao = getByText(/Adicionar/i)
//     fireEvent.change(input, {target: {value: 'teste2'}})
//     fireEvent.click(Botao)
    
//     expect(getByText(/Quantidade de posts: 1/i)).toBeInTheDocument()
//   })
// })

// //NÚMERO 7
// describe("Quando for criado um post vazio", () => {
//   test("Uma mensagem deve aparecer na tela informando que o post deve ser preenchido", () => {
//     const{getByPlaceholderText, getByText} = render (<App/>)

//     const input = getByPlaceholderText('Novo post')
//     const Botao = getByText(/Adicionar/i)
//     fireEvent.change(input, {target: {value: ''}})
//     fireEvent.click(Botao)

//     expect(getByText(/Ação proibida/i)).toBeInTheDocument()
//   })
// })
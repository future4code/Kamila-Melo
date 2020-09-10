//EXERCÍCIO 1
//LETRA A
//Acessamos através do process.argv[], informando qual índice queremos acessar.

//LETRA B

// let nome: string = process.argv[2]
// let idade: number = Number(process.argv[3])

// if(!nome && !idade){
//     console.log("Esperava dois parâmetros, mas não recebi nenhum")
// }
// else if(!nome || !idade){
//     console.log("Esperava dois parâmetros, mas recebi somente um")
// }else{
//     console.log('\x1b[40m%s\x1b[0m', `Olá, ${nome}! Você tem ${idade} anos.`)
// }

//LETRA C

// let nome: string = process.argv[2]
// let idade: number = Number(process.argv[3])
// let novaIdade: number = idade + 7

// if(!nome && !idade){
//     console.log("Esperava dois parâmetros, mas não recebi nenhum")
// }
// else if(!nome || !idade){
//     console.log("Esperava dois parâmetros, mas recebi somente um")
// }else{
//     console.log('\x1b[41m%s\x1b[0m',`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
// }

//EXERCÍCIO 2
// const operador: string = process.argv[2]
// const n1: number = Number(process.argv[3])
// const n2: number = Number(process.argv[4])

// if(!operador && !n1 && !n2){
//     console.log('\x1b[47m%s\x1b[0m',"Esperava três parâmetros, mas não recebi nenhum")
// }
// else if(!operador || !n1 || !n2){
//     console.log('\x1b[47m%s\x1b[0m',"Esperava três parâmetros, mas não recebi todos")
// }else{
//     switch(operador){
//         case "soma":
//             console.log('\x1b[42m%s\x1b[0m',n1 + n2)
//             break;
//         case "sub":
//             console.log('\x1b[43m%s\x1b[0m',n1 - n2)
//             break;
//         case "mult":
//             console.log('\x1b[44m%s\x1b[0m',n1 * n2)
//             break;
//         case "div":
//             console.log('\x1b[45m%s\x1b[0m',n1 / n2)
//             break;
//         default:
//             console.log('\x1b[46m%s\x1b[0m',"Não existe esse operador!")
//             break;
//     }
// }

//EXERCÍCIO 3

// import fs from 'fs'

// const novaTarefa: string = process.argv[2]

// fs.appendFileSync('./tarefas.txt', novaTarefa)

// console.log("Tarefa adicionada!")

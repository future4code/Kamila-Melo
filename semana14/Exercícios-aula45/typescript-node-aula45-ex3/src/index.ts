import fs from 'fs'

const novaTarefa: string = process.argv[2]

fs.appendFileSync('./tarefas.txt', novaTarefa)

console.log("Tarefa adicionada!")
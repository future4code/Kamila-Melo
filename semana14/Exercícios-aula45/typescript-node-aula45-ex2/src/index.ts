const operador: string = process.argv[2]
const n1: number = Number(process.argv[3])
const n2: number = Number(process.argv[4])

if(!operador && !n1 && !n2){
    console.log('\x1b[47m%s\x1b[0m',"Esperava três parâmetros, mas não recebi nenhum")
}
else if(!operador || !n1 || !n2){
    console.log('\x1b[47m%s\x1b[0m',"Esperava três parâmetros, mas não recebi todos")
}else{
    switch(operador){
        case "soma":
            console.log('\x1b[42m%s\x1b[0m',n1 + n2)
            break;
        case "sub":
            console.log('\x1b[43m%s\x1b[0m',n1 - n2)
            break;
        case "mult":
            console.log('\x1b[44m%s\x1b[0m',n1 * n2)
            break;
        case "div":
            console.log('\x1b[45m%s\x1b[0m',n1 / n2)
            break;
        default:
            console.log('\x1b[46m%s\x1b[0m',"Não existe esse operador!")
            break;
    }
}
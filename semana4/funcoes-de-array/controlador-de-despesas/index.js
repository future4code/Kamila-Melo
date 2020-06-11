/*---------------------------------js do cadastro de despesas---------------------------------*/
let inputValor = document.getElementById("valor")
let inputTipo = document.getElementById("tipo")
let inputDescricao = document.getElementById("descricao")

const minhaDespesa=[]

function cadastraDados(){
    if(inputValor.value === "" || inputTipo.options[inputTipo.selectedIndex].value === "" || inputDescricao.value === ""){
        alert("Favor completar todos os campos")
    }else{
        const cadDespesas = {
            valor: inputValor.value, 
            tipo: inputTipo.value, 
            descricao: inputDescricao.value
        }
        
        minhaDespesa.push(cadDespesas)
        
        console.log(minhaDespesa)
        
        inputValor.value = ""
        inputTipo.value = ""       
        inputDescricao.value = "" 

        const lista = document.getElementById("detalhadas")
        lista.innerHTML += `<div>${cadDespesas.valor} ${cadDespesas.tipo} ${cadDespesas.descricao}</div>`
    }
}

const inputValorMin = document.getElementById("valorMin")
const inputValorMax = document.getElementById("valorMax")
const inputTipoDet = document.getElementById("tipoDet")

function filtrar(){
    if(inputValorMin.value === "" || inputValorMax.value === "" || inputTipoDet.options[inputTipoDet.selectedIndex].value === ""){
        alert("Favor completar todos os campos")
    }else{
        const filtro = minhaDespesa.filter((elemento,index,array)=>{
            if(elemento === "Casa"){
                if((elemento >= inputValorMin.value) && (elemento <= inputValorMax.value)){
                    return true
                  }
                  return false
            }else if (elemento === "Festas"){
                if((elemento >= inputValorMin.value) && (elemento <= inputValorMax.value)){
                    return true
                  }
                  return false
            }else if (elemento === "Viagem"){
                if((elemento >= inputValorMin.value) && (elemento <= inputValorMax.value)){
                    return true
                  }
                  return false
            }else if (elemento === "Outros"){
                if((elemento >= inputValorMin.value) && (elemento <= inputValorMax.value)){
                    return true
                  }
                  return false
            }
        })
        // const filtros = document.getElementById("detalhadas")
        // filtros.innerHTML += `<div>${minhaDespesa.valor} ${minhaDespesa.tipo} ${minhaDespesa.descricao}</div>`
        console.log(filtro)
    }
    
}
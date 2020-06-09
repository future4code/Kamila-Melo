

function adicionaTarefa(){
    const dia = document.getElementById("selecao")
    let escolhaDia = dia.options[dia.selectedIndex].value

    const minhaTarefa = document.getElementById("meu-input")
    let item = minhaTarefa.value

    if(item!==""){
        if(escolhaDia === "segunda-feira"){
            const listaTarefa = document.getElementById("segunda")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }else if(escolhaDia === "terca-feira"){    
            const listaTarefa = document.getElementById("terca")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }else if(escolhaDia === "quarta-feira"){    
            const listaTarefa = document.getElementById("quarta")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }else if(escolhaDia === "quinta-feira"){    
            const listaTarefa = document.getElementById("quinta")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }
        else if(escolhaDia === "sexta-feira"){    
            const listaTarefa = document.getElementById("sexta")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }else if(escolhaDia === "sabado"){    
            const listaTarefa = document.getElementById("sabado")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }else if(escolhaDia === "domingo"){    
            const listaTarefa = document.getElementById("domingo")
            listaTarefa.innerHTML += `<li> ${item} </li>`
            minhaTarefa.value = ""
        }
    }
}

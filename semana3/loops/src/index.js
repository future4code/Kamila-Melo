/*Exercícios de interpretação de código*/
/*EXERCÍCIO 1*/
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
//Ele está verificando se a variável i é menor que 15 e enquanto for, ele vai somando os números até que a condição seja falsa.
//O resultado do console é 105

/*EXERCÍCIO 2*/
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

// a. O que o comando `.push` faz?
//Resposta: Adiciona mais um elemento ao final da lista

// b. Qual o valor impresso no console?
//Resposta: [10, 15, 25, 30]

// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
//Resposta: Com valor 3: [12, 15, 18, 21, 27, 30]      Com valor 4: [12]

/*DESAFIO 1*/
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

//0
//00     index.js:39 00
//000    index.js:39 000
//0000   index.js:39 0000
//A quantidade de zero apareceria o tanto que o número digitado pelo usuário

/*Exercícios de escrita de código*/
/*EXERCÍCIO 3*/
/*LETRA A*/
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
let menorNumero = 130

for (let elemento of array){
    if(elemento > maiorNumero){
        maiorNumero = elemento
    }
    if(elemento < menorNumero){
        menorNumero = elemento
    }
}
console.log("O maior número é " + maiorNumero + " e o menor é " + menorNumero)

/*LETRA B*/
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = ""

for(let elemento of array){
    novoArray += " " + (elemento/10)
    
}
console.log(novoArray)

/*LETRA C*/
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = ""

for(let elemento of array){
    if(elemento%2===0){
        novoArray += " " + elemento
    }
    
}
console.log(novoArray)

/*LETRA D*/
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numero = 0

for (let elemento of array){

    console.log("O elemento do índex " + numero + " é o " + elemento)
    numero++;
}

/*DESAFIO 2*/
let numeroEscolhido = Number(prompt("Primeiro jogador escolha um número:"))
console.log("Vamos jogar!")
let numeroChutado
let chutes = 0

while (numeroChutado !== numeroEscolhido){
    numeroChutado = Number(prompt("Segundo jogador chute os números até acertar."))
    console.log("O número chutado foi: " + numeroChutado)
    if(numeroChutado !== numeroEscolhido){
        if(numeroChutado > numeroEscolhido){
            console.log("Errou. O número escolhido é menor")
        }
        else if (numeroChutado < numeroEscolhido){
            console.log("Errou. O número escolhido é maior")
        }
    }else{
        console.log("Acertou")
    }
    chutes++
}

console.log("O número de tentativs foi: " + chutes)

/*DESAFIO 3*/
function getRandomInt(min, max) {
    return Math.floor(Math.random()* (100 - 0 + 1)) + 0;
}

let numeroEscolhido = getRandomInt()
console.log("Vamos jogar!")
let numeroChutado
let chutes = 0

while (numeroChutado !== numeroEscolhido){
    numeroChutado = Number(prompt("Segundo jogador chute os números até acertar."))
    console.log("O número chutado foi: " + numeroChutado)
    if(numeroChutado !== numeroEscolhido){
        if(numeroChutado > numeroEscolhido){
            console.log("Errou. O número escolhido é menor")
        }
        else if (numeroChutado < numeroEscolhido){
            console.log("Errou. O número escolhido é maior")
        }
    }else{
        console.log("Acertou")
    }
    chutes++
}

console.log("O número de tentativas foi: " + chutes)
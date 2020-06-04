/*Exercícios de interpretação de código*/
/*EXERCÍCIO 1*/
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Qual o teste que ele realiza? Ele verifica se o resto da divisão do número informado pelo usuário por 2 é igual a 0.
//Para que tipos de números ele imprime no console "Passou no teste"? Para números pares.
//Para que tipos, a mensagem é "Não passou no teste"? Para números ímpares.

/*EXERCÍCIO 2*/
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima? Para informar o preço da fruta escolhida pelo usuário.

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta  Maçã  é  R$  2.25

//c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria? R$ 24,55

//d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")? O preço da fruta  Pêra  é  R$  5

/*EXERCÍCIO 3*/
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

//Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//Acontecerá uma mensagem de erro: Uncaught ReferenceError: mensagem is not defined at index.js:59
//Isso acontece porque a variável mensagem está dentro do escopo do if, e o console.log está fora do bloco tentando acessar essa variável.

/*Exercícios de escrita de código*/
/*EXERCÍCIO 4*/
/*LETRA A*/
let n1 = prompt("Digite um número:")
let n2 = prompt("Digite outro número:")

if(n1 > n2){
    console.log (n1,n2)
}
else{
    console.log (n2,n1)
}
//Como finalizei com um else, ele coloca os dois números iguais um ao lado do outro

/*LETRA B*/
let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
let n3 = prompt("Digite o terceiro número:")

if((n1 > n2) && (n1 > n3) && (n2 > n3)){
    console.log (n1,n2,n3)
}
else if((n1 > n2) && (n1 > n3) && (n3 > n2)){
    console.log (n1,n3,n2)
}
else if((n2 > n1) && (n2 > n3) && (n1 > n3)){
    console.log (n2,n1,n3)
}
else if((n2 > n1) && (n2 > n3) && (n3 > n1)){
    console.log (n2,n3,n1)
}
else if((n3 > n1) && (n3 > n2) && (n1 > n2)){
    console.log (n3,n1,n2)
}
else if((n3 > n1) && (n3 > n2) && (n2 > n1)){
    console.log (n3,n2,n1)
}
//Como finalizei com um else if o console ficou em branco

/*LETRA C*/
let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero3 = prompt("Digite o terceiro número:")

const n1 = Number(numero1)
const n2 = Number(numero2)
const n3 = Number(numero3)

if((n1 > n2) && (n1 > n3) && (n2 > n3)){
    console.log (n1,n2,n3)
}
else if((n1 > n2) && (n1 > n3) && (n3 > n2)){
    console.log (n1,n3,n2)
}
else if((n2 > n1) && (n2 > n3) && (n1 > n3)){
    console.log (n2,n1,n3)
}
else if((n2 > n1) && (n2 > n3) && (n3 > n1)){
    console.log (n2,n3,n1)
}
else if((n3 > n1) && (n3 > n2) && (n1 > n2)){
    console.log (n3,n1,n2)
}
else if((n3 > n1) && (n3 > n2) && (n2 > n1)){
    console.log (n3,n2,n1)
}
else if((n3===n2) && (n2===n1)){
    alert("Você deve, ao menos, inserir um número diferente")
}
if((n1 === n2) && (n3 > n1)){
    console.log (n3,n1,n2)
}
else if((n1 === n2) && (n1 > n3)){
    console.log (n1,n2,n3)
}
else if((n3 === n1) && (n2 > n3)){
    console.log (n2,n1,n3)
}
else if((n3 === n1) && (n2 < n3)){
    console.log (n1,n3,n2)
}
else if((n2 === n3) && (n1 > n3)){
    console.log (n1,n2,n3)
}
else if((n2 === n3) && (n1 < n3)){
    console.log (n2,n3,n1)
}

/*EXERCÍCIO 5*/
/*LETRA A*/
//https://1drv.ms/b/s!AtL1FYkJkma9g0PUmFXYMCcbcOv8?e=Uw7JsF

/*LETRA B*/
let ossos = true
let pelos = false
let penas = false
let terrestre = true
let vidaAquatica = true
let racional = false

if(ossos === true){
    console.log("Animal vertebrado")
    if(pelos === true){
        console.log("Animal mamífero")
        if(racional === true){
            console.log("Animal humano")
        }
        else if(racional === false){
            console.log("Animal não humano")
        }
    }
    if(pelos === false){
        if(penas === true){
            console.log("Ave")
        }
        else if (penas === false){
            if(terrestre === false){
                console.log("Peixe")
            }
            else if (terrestre === true){
                if (vidaAquatica === true){
                    console.log("Anfíbio")
                }
                else if (vidaAquatica === false){
                    console.log("Réptil")
                }
            }
            
        }
        
    }
    
}
else if(ossos === false){
    console.log("Animal invertebrado")
}
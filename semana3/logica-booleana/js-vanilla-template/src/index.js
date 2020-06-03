/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO*/
/*EXERCÍCIO 1*/
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //a. false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //d. false

console.log("e. ", typeof resultado) //e. boolean

/*EXERCÍCIO 2*/
let array
console.log('I. ', array) //I. undefined

array = null
console.log('II. ', array) //II. null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) //III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) //V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) //VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //VII. 1

// a. O que é `array` e como se declara em `JS`?
// Resposta: Array é um objeto usado para armazenar vários valores em uma única variável.
// Se declara da seguinte forma: let frutas = ['Maçã', 'Banana'];

// b. Qual o index inicial de um `array`?
//Resposta: índice 0

// c. Como se determinar o tamanho do `array`?
//Resposta: Através da propriedade length
//Ex: console.log(frutas.length)

// d. Indique todas as mensagens impressas no console.
// Resposta como comentário no código acima.

/*EXERCÍCIOS DE ESCRITA DE CÓDIGO*/
/*EXERCÍCIO 1*/
let tempFahrenheit1 = 77
let tempKelvin1 = (tempFahrenheit1 - 32) * 5/9 + 273.15
console.log(tempKelvin1)

let tempCelsius2 = 80
let tempFahrenheit2 = (tempCelsius2) * 9/5 + 32
console.log(tempFahrenheit2)

let tempCelsius3 = 30
let tempFahrenheit3 = (tempCelsius3) * 9/5 + 32
let tempKelvin3 = (tempFahrenheit3 - 32) * 5/9 + 273.15
console.log(tempFahrenheit3)
console.log(tempKelvin3)

/*EXERCÍCIO 2*/
let pergunta1 = "Qual seu nome?"
let nome = prompt ("Qual seu nome?")
console.log("1. " + pergunta1)
console.log("Resposta: " + nome)

let pergunta2 = "Qual sua idade?"
let idade = prompt ("Qual sua idade?")
console.log("2. " + pergunta2)
console.log("Resposta: " + idade)

let pergunta3 = "Qual seu filme favorito?"
let filme = prompt ("Qual seu filme favorito?")
console.log("3. " + pergunta3)
console.log("Resposta: " + filme)

let pergunta4 = "Qual sua cor favorita?"
let cor = prompt ("Qual sua cor favorita?")
console.log("4. " + pergunta4)
console.log("Resposta: " + cor)

let pergunta5 = "Em qual estado você mora?"
let estado = prompt ("Em qual estado você mora?")
console.log("5. " + pergunta5)
console.log("Resposta: " + estado)

/*EXERCÍCIO 3*/
let consumoQuilowatt = 280
let valorPagar = consumoQuilowatt * 0.05
console.log("O valor a ser pago pelo consumo é de: R$ " + valorPagar)

let desconto = 15/100
let valorPagarFinal = valorPagar * desconto
console.log("O valor a ser pago pelo consumo com desconto é de: R$ " + valorPagarFinal)

/*DESAFIOS*/
/*LETRA A*/
let libra1 = 20
let quilograma1 = libra1/2.2046
console.log(libra1 + "lb equivalem a "+ quilograma1 + "kg")

/*LETRA B*/
let onca2 = 10.5
let quilograma2 = onca2/35.274
console.log(onca2 + "oz equivalem a "+ quilograma2 + "kg")

/*LETRA C*/
let milha3 = 100
let metro3 = milha3 * 1609.34
console.log(milha3 + "mi equivalem a " + metro3 + "m")

/*LETRA D*/
let pes4 = 50
let metro4 = pes4/3.281
console.log(pes4 + "ft equivalem a " + metro4 + "m")

/*LETRA E*/
let galao5 = 103.56
let litro5 = galao5 * 3.78541
console.log(galao5 + "gal equivalem a " + litro5 + " l")

/*LETRA F*/
let xicara6 = 450
let litro6 = xicara6 * 0.24
console.log(xicara6 + "xic equivalem a " + litro6 + " l")

/*LETRA G*/
let pergunta7 = "Digite a quantidade de xícaras para fazer a conversão para litros:"
let xicara7 = prompt("Digite a quantidade de xícaras para fazer a conversão para litros:")
let litro7 = xicara7 * 0.24
console.log(pergunta7)
console.log(xicara7)
console.log(xicara7 + "xic equivalem a " + litro7 + " l")
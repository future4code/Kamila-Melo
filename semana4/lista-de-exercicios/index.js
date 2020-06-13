/*Exercícios de interpretação de código*/
/*NÚMERO 1*/
//Ele converte o valor de dólar para real. É passado uma função chamada conversorDeMoeda com parâmetro valorEmDolar,
//dentro dela é solicitada ao usuário a cotação do dólar, e é armazenada em uma variável constate chamada cotacao.
//E o retorno dessa funçao é o valor em reais. Do lado de fora da função, ela é chamada indicando valor de 100 dólares.
//O resultado é armazenado dentro de uma variável constante chamada meuDinheiro. Na próxima linha é dado um
//console.log para imprimir o resultado. O valor impresso no console, caso o usuário de o usuario digitar 5 na cotacao, é
//R$ 500

/*NÚMERO 2*/
//Mostra o valor recebido após um investimento. É passado uma função chamada investeDinheiro com parêmetros tipoDeInvestimento
//e valor. É criada uma variável valorAposInvestimento. É feito um switch case onde é verificado qual o tipo de investimento,
//e caso seja algum informado válido, é calculado o valor vezes o percentual de lucro, o resultado é o retorno da função. 
//Fora da função ela é chamada duas vezes, passando valores diferentes e armazenadas em duas variáveis. Nas linhas abaixo 
//é dado dois console.log para imprimir o resultado das variáveis. O valor impresso no console é 165 e TIPO DE INVESTIMENTO INFORMADO
//INCORRETO!

/*NÚMERO 3*/
//Separa em arrays diferentes os números pares e números ímpares. É dado um array com alguns números e outros dois arrays vazios.
//É chamado um for para verificar se todos os elementos do array são pares, se for é jogado para o array1, se eles forem ímpar são jogados no
//array2. Nas próximas linhas tem 3 console.log, o primeiro para imprimir a quantidade total de numeros dentro do array principal, o segundo
//para imprimir a quantidade total de numeros pares e o terceiro para imprimir a quantidade total de numeros ímpares. O valor impresso é
//Quantidade total de números 14
//6
//8

/*NÚMERO 4*/
//Mostra o maior e o menor número dentro de um array. É dado um array com alguns números e criado duas variáveis, numero1 com valor infinity,
//e numero2 com valor 0. É chamado um for para verificar em um if se cada elemento do array é menor, o primeiro é comparado com infinity, se for menor
//ele é armazenado na variável numero1 e feito outra comparação com todos os elementos até buscar o menor. Em outro if verifica se cada 
//elemento do array é maior, o primeiro é comparado com 0, se for maior ele é armazenado na variável numero2 e feito outra comparação
// com todos os elementos até buscar o maior. Os valores impressos no console.log é -10 e 1590

/*Exercícios de Lógica de Programação*/
/*NÚMERO 1*/
//forEach
// let array = [1,2,3,4];
// array.forEach((elemento,index,array)=>{
//     console.log(`${index} = ${elemento}`)
// })

//map
// let array = [1,2,3,4];
// const dobra = array.map((elemento,index,array)=>{
//     return elemento * 2
// })
// console.log(dobra)

//filter
// let array = [1,2,3,4,5,6,7,8,9,10];
// const impares = array.filter((elemento,index,array)=>{
//     if(elemento % 2 !== 0){
//         return true
//     }
//         return false
// })
// console.log(impares)

/*NÚMERO 2*/
//LETRA A: False
//LETRA B: True
//LETRA C: True
//LETRA D: True
//LETRA E: True

/*NÚMERO 3*/
//Não funciona, pois não foi atribuido um valor para a const quantidadeDeNumerosPares e não foi colocado o incremento i++ no final do while
// const quantidadeDeNumerosPares = 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }


/*NÚMERO 4*/
// function triangulo (a,b,c){
//     if((b!== a) && (b!== c) && (a!==c)) console.log("Escaleno") //3 lados diferentes 
//     else if((b===a) && (b===c) && (a===c)) console.log("Equilátero") //3 lados iguais
//     else console.log("Isósceles") //2 lados iguais
// }
// triangulo(3,4,1)

/*NÚMERO 5*/
// let a = 15
// let b = 30

// function maiorNumero(a,b){
//     if(a > b) console.log("O maior é: " + a)
//     else if (a < b) console.log("O maior é: " + b)
// }

// function divisivel(a,b){
//     if(a%b===0) console.log(a + " é divisível por " + b)
//     else console.log(a + " não é divisível por " + b)
//     if(b%a===0) console.log(b + " é divisível por " + a)
//     else console.log(b + " não é divisível por " + a)
// }

// function diferenca(a,b){
//     if(a > b) console.log("A diferença entre eles é: " + Number(a-b))
//     else if (b > a) console.log("A diferença entre eles é: " + Number(b-a))
// }


// maiorNumero(a,b)
// divisivel(a,b)
// diferenca(a,b)

/*Exercícios de Funções*/
/*NÚMERO 1*/
// let array = [100,700,500,900,400,200,300,600]

// function maioresNumeros(){
//     let numero1 = 0
//     let numero2 = numero1

//     for(elemento of array){
//         if(elemento > numero1){
//             numero1 = elemento
//         }
//     }
//     for(elemento of array){
//         if((elemento > numero2) && (elemento !== numero1)){
//             numero2 = elemento
//         }
//     }
//     console.log(numero1,numero2)
// }

// maioresNumeros()

/*NÚMERO 2*/
// let invocacao = function (frase){
//     return frase
// }

// const resultado = invocacao("Hello Labenu")
// alert(resultado)

/*Exercícios de Objetos*/
/*NÚMERO 1*/
//São tipos epeciais de variáveis, onde conseguimos armazenar informações compostas. Podemos usá-las quando queremos guardar vários dados
//sobre o mesmo contexto.

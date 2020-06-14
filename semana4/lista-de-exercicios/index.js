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

/*NÚMERO 2*/
// let retangulo = {
//     largura: 0,
//     altura: 0,
//     perimetro:0,
//     area: 0
// }

// function criaRetangulo (lado1,lado2){
//     const largura = lado1
//     const altura = lado2
//     const perimetro = (2*(lado1+lado2))
//     const area = (lado1*lado2)
    

//     const novoRetangulo = {
//         ...retangulo
//     }
    
//     novoRetangulo.largura = lado1
//     novoRetangulo.altura = lado2
//     novoRetangulo.perimetro = perimetro
//     novoRetangulo.area = area

//     console.log(novoRetangulo)
// }

// criaRetangulo(2,2)

/*NÚMERO 3*/
// let filme = {
//     titulo: 'Harry Potter e a Pedra Filosofal',
//     ano: 2001,
//     diretor: 'Chris Columbus',
//     ator1: 'Daniel Radcliffe',
//     ator2: 'Rupert Grint',
//     atriz: 'Emma Watson'
// }

// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}
// e estrelado por ${filme.ator1}, ${filme.ator2} e ${filme.atriz}.`)

/*NÚMERO 4*/
// const pessoa = {
//     nome: 'Kamila',
//     idade: 32,
//     email: 'kamilamelo5@hotmail.com',
//     endereco: 'Rua Pedro Americo'
// }

// function anonimizarPessoa(){
//     const anonimo = {
//         ...pessoa,
//         nome: 'ANÔNIMO'
//     }
//     console.log(anonimo)
// }

// anonimizarPessoa()

/*Exercícios de Funções de array*/
/*NÚMERO 1*/
/*LETRA A*/
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const soAdultos = pessoas.filter((elemento,index,array)=>{
//     if(elemento.idade>=20){
//         return true
//     }
//     return false
// })

// console.log(soAdultos)

/*LETRA B*/
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const soCriancasAdolescentes = pessoas.filter((elemento,index,array)=>{
//     if(elemento.idade < 20){
//         return true
//     }
//     return false
// })

// console.log(soCriancasAdolescentes)

/*NÚMERO 2*/
/*LETRA A*/
// const array = [1, 2, 3, 4, 5, 6]

// const numerosMulti2 = array.map((elemento,index,array)=>{
//     return elemento*2
// })

// console.log(numerosMulti2)

/*LETRA B*/
// const array = [1, 2, 3, 4, 5, 6]

// const numerosMulti3 = array.map((elemento,index,array)=>{
//     const resultado = elemento*3
//     return resultado.toString()
// })

// console.log(numerosMulti3)

/*LETRA C*/
// const array = [1, 2, 3, 4, 5, 6]

// const parImpar = array.map((elemento,index,array)=>{
//     if(elemento%2===0){
//         return `${elemento} é par`
//     }
//     return `${elemento} é ímpar`
// })

// console.log(parImpar)

/*NÚMERO 3*/
/*LETRA A*/
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasPermitidas = pessoas.filter((elemento,index,array)=>{
//     if((elemento.altura >= 1.5) && (elemento.idade > 14) && (elemento.idade < 60)){
//         return true
//     }
//     return false
// })

// console.log(pessoasPermitidas)

/*LETRA B*/
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasNaoPermitidas = pessoas.filter((elemento,index,array)=>{
//     if((elemento.altura >= 1.5) && (elemento.idade > 14) && (elemento.idade < 60)){
//         return false
//     }
//     return true
// })

// console.log(pessoasNaoPermitidas)

/*NÚMERO 4*/
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// consultas.forEach((elemento,index,array) =>{
//     if(elemento.genero === "masculino"){
//         elemento.genero = "Sr. "
//     }else{
//         elemento.genero = "Sra. "
//     }
    
// })

// const emails = consultas.map((elemento,index,array)=>{
//     if(elemento.cancelada === true){
//         return `Olá, ${elemento.genero} ${elemento.nome}. Infelizmente, sua consulta marcada para o dia ${elemento.dataDaConsulta} foi cancelada.
//         Se quiser, pode entrar em contato conosco para remarcá-la.`
//     }
//         return `Olá, ${elemento.genero} ${elemento.nome}.Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${elemento.dataDaConsulta}.
//         Por favor, acuse o recebimento deste e-mail.`
// })

// console.log(emails)

/*NÚMERO 5*/
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// let total = 0

// const calculaContas = contas.forEach((elemento,index,array)=>{
    
//     for(let i = 0; i < elemento.compras.length; i++){
//         total += elemento.compras[i];
//     }
//     elemento.saldoTotal = elemento.saldoTotal - total
//     total = 0
    
// })
// console.log(contas)
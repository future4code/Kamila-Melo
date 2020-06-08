/*Exercícios de interpretação de código*/
/*EXERCÍCIO 1*/
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// const resultado = minhaFuncao(8)
// console.log(resultado)

/*LETRA A*/
//Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
//[]

/*LETRA B*/
//Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
//[0, 1, 0, 1, 2, 3]

/*LETRA C*/
//Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
//[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

/*EXERCÍCIO 2*/
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

/*LETRA A*/
//Explicite quais são as saídas impressas no console
//0
//2
//undefined

/*LETRA B*/
//O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
//Funcionaria. Pois seria feita as substituições no código e ele chamaria a função normalmente.

/*EXERCÍCIO 3*/
// function criaNovoArray(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

//  const resul = criaNovoArray([])
//  console.log(resul)

 //A função recebe um array vazio, uma variável resultadoA com valor 0 e uma variável resultadoB com valorB. Ao ser chamada ela 
 //soma a variável resultadoA um valor referente ao tamanho do array novo e na variável resultadoB multiplica um valor referente ao tamanho 
 //do array novo. No final ele cria um novo array. Novo nome criaNovoArray.

 /*Exercícios de escrita de código*/
 /*EXERCÍCIO 4*/
/*LETRA A*/
// function anosCachorro(anosHumanos){
//     const calculoIdadeCachorro = anosHumanos/7
//     return calculoIdadeCachorro
// }

// const resultado = anosCachorro(28)
// console.log(resultado)

/*LETRA B*/
// function informacoes (nome, idade, endereco, estudante){
//     if (estudante === true){
//         estudante = "sou"
//     }else{
//         estudante = "não sou"
//     }

//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudante + " estudante.")
// }

// const resultado = informacoes("Goli", 23, "Rua Guarapari 190", true)
// console.log(resultado)

/*EXERCÍCIO 5*/
// function seculo(ano){
//     if(ano === 1000){
//         console.log("O ano " + ano + " pertence ao século X")
//     }else if((ano >= 1001) && (ano <= 1100)){
//         console.log("O ano " + ano + " pertence ao século XI")
//     }else if((ano >= 1101) && (ano <= 1200)){
//         console.log("O ano " + ano + " pertence ao século XII")
//     }else if((ano >= 1201) && (ano <= 1300)){
//         console.log("O ano " + ano + " pertence ao século XIII")
//     }else if((ano >= 1301) && (ano <= 1400)){
//         console.log("O ano " + ano + " pertence ao século XIV")
//     }else if((ano >= 1401) && (ano <= 1500)){
//         console.log("O ano " + ano + " pertence ao século XV")
//     }else if((ano >= 1501) && (ano <= 1600)){
//         console.log("O ano " + ano + " pertence ao século XVI")
//     }else if((ano >= 1601) && (ano <= 1700)){
//         console.log("O ano " + ano + " pertence ao século XVII")
//     }else if((ano >= 1701) && (ano <= 1800)){
//         console.log("O ano " + ano + " pertence ao século XVIII")
//     }else if((ano >= 1800) && (ano <= 1900)){
//         console.log("O ano " + ano + " pertence ao século XIX")
//     }else if((ano >= 1900) && (ano <= 2000)){
//         console.log("O ano " + ano + " pertence ao século XX")
//     }else if((ano >= 2001) && (ano <= 2020)){
//         console.log("O ano " + ano + " pertence ao século XXI")
//     }else{
//         console.log("Ano fora do padrão")
//     }
// }

// const resultado = seculo(2001)
// console.log(resultado)

/*EXERCÍCIO 6*/
/*LETRA A*/
// function quantidade(array){
    
//     for(elemento of array){
//         console.log(array.length)
//     }
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// console.log("Tamanho: " + array.length)

/*LETRA B*/
//Usando um número qualquer
// function parImpar (numero){
//         if(numero%2===0){
//             console.log("É par")
//         }else{
//             console.log("É ímpar")
//         }
// }
// parImpar(5)

//usando o array dado
// function parImpar (array){
//     for(let elemento of array){
//         if(elemento%2===0){
//             console.log(elemento + ": É par")
//         }else{
//             console.log(elemento + ": É ímpar")
//         }
//     }
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// parImpar(array)

/*LETRA C*/
// const pares = (array) =>{

//     for (elemento of array) {
//         if(elemento%2===0){
//             console.log(elemento)
//         }

//     }
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// pares(array)

/*LETRA D*/
// function par (num){
//     parImpar()
// }
// par = parImpar(22)
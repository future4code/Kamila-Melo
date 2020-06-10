/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo de Blackjack")

 let novoJogo = confirm("Quer iniciar uma nova rodada?")

 if(novoJogo === true){
   let carta = comprarCarta();
   let primeiraUsuario = carta.texto
   let primeiroValorUsuario = carta.valor
   carta = comprarCarta();
   let segundaUsuario = carta.texto
   let segundoValorUsuario = carta.valor
   let pontuacaoUsuario = Number(primeiroValorUsuario + segundoValorUsuario)
   console.log("Usuário - cartas: " + primeiraUsuario + " " + segundaUsuario + " - pontuação " + pontuacaoUsuario)
   
   carta = comprarCarta();
   let primeiraComputador = carta.texto
   let primeiroValorComputador = carta.valor
   carta = comprarCarta();
   let segundaComputador = carta.texto
   let segundoValorComputador = carta.valor
   let pontuacaoComputador = Number(primeiroValorComputador + segundoValorComputador)
   console.log("Computador - cartas: " + primeiraComputador + " " + segundaComputador + " - pontuação " + pontuacaoComputador)
   if(pontuacaoUsuario > pontuacaoComputador){
      console.log("O usuário ganhou!")
   }
   else if (pontuacaoUsuario < pontuacaoComputador){
      console.log("O computador ganhou!")
   }
   else{
      console.log("Empate")
   }
 }
 else{
    console.log("O jogo acabou")
 }
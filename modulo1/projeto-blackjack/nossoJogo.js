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

const cartaOneUser = comprarCarta()
const cartaTwoUser = comprarCarta()
const cartaOneComp = comprarCarta()
const cartaTwoComp = comprarCarta()
const somaUser = cartaOneUser.valor + cartaTwoUser.valor
const somaComp = cartaOneComp.valor + cartaTwoComp.valor

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("pergunta de sim ou não")) {
   console.log(`Usuário - cartas: ${cartaOneUser.texto} ${cartaTwoUser.texto} - Pontuação ${somaUser}`)
   console.log(`Computador - cartas: ${cartaOneComp.texto} ${cartaTwoComp.texto} - Pontuação ${somaComp}`)

   if(somaUser > somaComp) {
      console.log("O usuário ganhou!")
   }else if(somaComp > somaUser){
      console.log("O computador ganhou!")
   }else {
      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou")
}
*/
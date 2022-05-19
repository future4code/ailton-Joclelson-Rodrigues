/* 1 - Exercícios de interpretação de código

a) verifica se o numero e divisivel por 2, se for divisivel e o resto for 0 passa no teste, se nao ele nao passa no teste
b) numeros pares
c) numeros impares

2 -
a) verifica preço das frutas
b) o valor de maçã e 2.25
c) o preço da pera iria para o valor que esta em default 5

3- 
a)recebendo um numero do usuario
b) se o usuario digitar 10 ira imprimir a mensagem do if, 10 e maior que 0
c) no console.log no final ele da um erro porque nao consegue acessar por conta do escopo
*/

// Exercícios de escrita de código
/* 1
let idadeUsuario = Number(prompt("Qual sua idade?"))

if(idadeUsuario >= 18){
   console.log("Você pode dirigir")
}else {
   console.log("Você não pode dirigir.")
}
*/

/*2
let turno = prompt("Em que turno você estuda?\n M - (Matutino)\n V - (Vespertino)\n N - (Noturno)")

if(turno.toLowerCase() == "m") {
   console.log("Bom dia!")
}
else if(turno.toLowerCase() == "v") {
   console.log("Boa tarde!")
}
else if(turno.toLowerCase() == "n") {
   console.log("Boa noite!")
}
else {
   console.log("Digite uma opção valida")
}
*/

/*3
let turnoUser = prompt("Em que turno você estuda?\n M - (Matutino)\n V - (Vespertino)\n N - (Noturno)")

switch(turnoUser.toLowerCase()) {
   case "m":
      console.log("Você estuda pela manhã")
   break
   case "v":
      console.log("Você estuda a tarde")
      break
   case "n":
      console.log("Você estuda a noite")
      break
   default:
      console.log("Digite uma opção valida")
}
*/

/*4
let generoFilme = prompt("Qual seu gênero do filme?")
let precoIngresso = Number(prompt("Até quanto você paga pelo filme?"))

if(generoFilme.toLowerCase() == "fantasia" && precoIngresso < 15) {
   console.log("Bom filme!")
} else {
   console.log("Escolha outro filme :(")
}
*/

// desafios 
/* 1 -
let generoFilme = prompt("Qual seu gênero do filme?")
let precoIngresso = Number(prompt("Até quanto você paga pelo filme?"))

if(generoFilme.toLowerCase() == "fantasia" && precoIngresso < 15) {
   let lanche = prompt("Quer adicionar um lanche?")
   console.log("Bom filme!")
   console.log(`Aproveite o seu ${lanche}`)
} else {
   console.log("Escolha outro filme :(")
}
*/

//2 
const nome = prompt("Digite seu nome completo")
const tipoJogo = prompt("Tipo de jogo\n IN - Internacional\n DO - Doméstico")
const etapa = prompt("Etapa do jogo\n SF - Semi-final\n DT - Decisão 3º lugar\n FI - Final")
const categoria = prompt("Categoria: 1, 2, 3 ou 4")
const quantidadeIng = Number(prompt("Quantidade de ingressos"))


const calculo = (nome, tipo, etapa, categoria, quantidade) => {
   switch(tipo) {
      case "DO":
         switch(etapa){
            case "SF":
               if(categoria == "1"){
                  res = quantidade * 1320
                  ing = 1320
               }else if(categoria == "2"){
                  res = quantidade * 880
                  ing = 880
               } else if(categoria == "3"){
                  res = quantidade * 550
                  ing = 550
               }else if(categoria == "4"){
                  res = quantidade * 220
                  ing = 220
               }
                  return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo:  Nacional 
                  Etapa do jogo: Semi-final
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  R$ ${ing}
                  Valor total:  R$ ${res}
                  `)
            case "DT":
               if(categoria == "1"){
                  res = quantidade * 660
                  ing = 660
               }else if(categoria == "2"){
                  res = quantidade * 440
                  ing = 440
               }else if(categoria == "3"){
                  res = quantidade * 330
                  ing = 330
               }else if(categoria == "4"){
                  res = quantidade * 170
                  ing = 170
               }
               return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo:  Nacional 
                  Etapa do jogo: Decisão 3º lugar
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  R$ ${ing}
                  Valor total:  R$ ${res}
                  `)
            case "FI":
               if(categoria == "1"){
                  res = quantidade * 1980
                  ing = 1980
               }else if(categoria == "2"){
                  res = quantidade * 1320
                  ing = 1320
               }else if(categoria == "3"){
                  res = quantidade * 880
                  ing = 880
               }else if(categoria == "4"){
                  res = quantidade * 330
                  ing = 330
               }
               return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo:  Nacional 
                  Etapa do jogo: Final
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  R$ ${ing}
                  Valor total:  R$ ${res}
                  `)
            default:
               console.log("Insira os dados corretos")
               break
            }
      case "IN":
         switch(etapa){
            case "SF":
               if(categoria == "1"){
                  res = quantidade * (1320 * 4.10)
                  ing = 1320
               }else if(categoria == "2"){
                  res = quantidade * (880 * 4.10)
                  ing = 880
               } else if(categoria == "3"){
                  res = quantidade * (550 * 4.10)
                  ing = 550
               }else if(categoria == "4"){
                  res = quantidade * (220 * 4.10)
                  ing = 220
               }
                  return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo: Internacional
                  Etapa do jogo: Semi-final
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  U$ ${ing}
                  Valor total:  U$ ${res}
                  `)
            case "DT":
               if(categoria == "1"){
                  res = quantidade * (660 * 4.10)
                  ing = 660
               }else if(categoria == "2"){
                  res = quantidade * (440 * 4.10)
                  ing = 440
               }else if(categoria == "3"){
                  res = quantidade * (330 * 4.10)
                  ing = 330
               }else if(categoria == "4"){
                  res = quantidade * (170 * 4.10)
                  ing = 170
               }
               return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo:  Internacional
                  Etapa do jogo: Decisão 3º lugar
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  U$ ${ing}
                  Valor total:  U$ ${res}
                  `)
            case "FI":
               if(categoria == "1"){
                  res = quantidade * (1980 * 4.10)
                  ing = 1980
               }else if(categoria == "2"){
                  res = quantidade * (1320 * 4.10)
                  ing = 1320
               }else if(categoria == "3"){
                  res = quantidade * (880 * 4.10)
                  ing = 880
               }else if(categoria == "4"){
                  res = quantidade * (330 * 4.10)
                  ing = 330
               }
               return console.log(`
                  ----Dados da compra----
                  Nome do cliente: ${nome}
                  Tipo do jogo:  Internacional
                  Etapa do jogo: Final
                  Categoria: ${categoria}
                  Quantidade de Ingressos: ${quantidade}
                  -----Valores-----
                  Valor do ingresso:  U$ ${ing}
                  Valor total:  U$ ${res}
                  `)
            default:
               console.log("Insira os dados corretos")
               break
            }
      default:
         console.log("Insira os dados corretos")
         break
      }
      
}

calculo(nome, tipoJogo, etapa, categoria, quantidadeIng)
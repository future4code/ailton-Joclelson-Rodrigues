/* 
Exercícios de interpretação de código

1 
a = False
b = False
c = True 
d = Boolean


2 - Ele precisa converter string em number, seria impresso um 
concatenação dos valores digitados

3 - fazer a conversão para number() 
*/

/*Exercícios de escrita de código
// 1

const idadeUser = Number(prompt("Qual sua idade ?"))
const idadeAmigo = Number(prompt("Qual a idade do seu amigo ?"))

const resultado = idadeUser > idadeAmigo
const diferenca = idadeUser - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?",resultado)
console.log("A diferença de idade e", diferenca,"anos")
*/


/* 
//2
const numero = Number(prompt("Insira um número par"))

const restoDivisao = numero % 2

console.log(restoDivisao)

// testei com diversos numeros pares e o resultado e sempre 0
// testei com varios numeros impares e o resultado e sempre 1
*/

 
/* 
// 3 
const idadeAnos = Number(prompt("Quantos anos você tem?"))

const idadeMeses = idadeAnos * 12
const idadeDia = idadeAnos * 365
const idadeHora = idadeAnos * 8760

console.log("a) Você tem", idadeMeses, "meses de vida.")
console.log("b) Você tem", idadeDia, "dias de vida.")
console.log("c) Você tem", idadeHora, "horas de vida.")
*/


/* 4
const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

const numeroMaior = primeiroNumero > segundoNumero
const numeroIgual = primeiroNumero === segundoNumero
const numeroDivisivel = (primeiroNumero % segundoNumero) === 0
const segundoNumeroDivisivel = (segundoNumero % primeiroNumero) === 1


console.log("O primeiro número é maior que o segundo?",numeroMaior)
console.log("O primeiro número é igual ao segundo?",numeroIgual)
console.log("O primeiro numero é divisível pelo segundo?",numeroDivisivel)
console.log("O segundo numero é divisível pelo primeiro?",segundoNumeroDivisivel)
*/

const sexo = (obj) => {
   if(obj.sexo === "masculino") {
      return "Bem-vindo!"
   }
   else if(obj.sexo === "feminino") {
      return "Bem-vinda"
   }
   else {
      return "Boas-vindas"
   }
}

const pessoa1 = {
   nome: "Joclelson",
   sexo: "masculino"
}
const pessoa2 = {
   nome: "Camila",
   sexo: "feminino"
}
const pessoa3 = {
   nome: "Cris",
   sexo: "outro"
}

console.log(sexo(pessoa3))
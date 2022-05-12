//Exercícios de interpretação de código
/* 1
a) 10, 50
b) não apareceria nada.

2
a) Esaa função deixa o texto inserido pelo usuario em caixa baixa e e verifica se a uma string com nome cenoura
b) i true
  ii false
 iii false 
*/


// Exercícios de escrita de código
//1
/*a)
function imprimir() {
   console.log("Eu sou Joclelson, tenho 29 anos, moro em Tucuruí e sou estudante.")
}
const res = imprimir()
console.log(res)
*/

/* b)
   const nome = "Lais"
   const idade = 23
   const cidade = "São Paulo"
   const profissao = "instrutora"

function funcoes(nome, idade, cidade, profissao) {
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
const resultado = funcoes(nome, idade, cidade, profissao)
*/

/*2 
//a)
const soma = (num1, num2) => {
   return num1 + num2
}
console.log(soma(3, 15))

//b)
const idade1 = 35
const idade2 = 18

function verificarbool() {
   return idade1 >= idade2
}
const resultado = verificarbool()
console.log(resultado)

//c)
function verificacao() {
   return (50 % 2) === 0
}
const res = verificacao()
console.log(res)

//d)
const texto = "Deus acima de tudo"

const tamanho = (texto) => texto.length
const maiuscula = (texto) => texto.toUpperCase()

console.log(tamanho(texto), maiuscula(texto))
*/

//3

const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite outro numero"))

function operacoes(num1, num2) {
   const soma = num1 + num2
   const sub = num1 - num2
   const mult = num1 * num2
   const div = num1 / num2
   return [soma, sub, mult, div]
}
console.log(operacoes(numero1, numero2))
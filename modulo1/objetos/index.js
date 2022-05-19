/* Exercícios de interpretação de código
1 - a) Matheus Nachtergaele, Virginia Cavendish , globo 14h

2 - a) nome: Juca, idade: 3, raça: SRD
       nome: Juba, idade: 3, raça SRD
       nome: Jubo, idade: 3, raça: SRD
    b) clona de outro objeto

3 - a) false, undefined
    b) no primeiro console.log a função retorna a propriedade do objeto backnder, no segundo altura nao esta definido a nenhum valor por isso retorna undefined
*/

// Exercícios de escrita de código
// 1 a)
const pessoa1 = {
   nome: "Gustavo",
   apelidos: ["guga", "gustavinho", "gugu"]
}

const imprimir = (obj) => {
   console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`)
}

imprimir(pessoa1)

// b) 
const pessoa2 = {
   ...pessoa1,
   apelidos: ["gaga", "g10", "gtv"]
}

imprimir(pessoa2)


// 2 
const nome1 = {
   nome: "Henrique",
   idade: 22,
   profissao: "professor"
}
const nome2 = {
   nome: "Joclelson",
   idade: 29,
   profissao: "development"
}

const funcao = (pessoa) => {
   array = []
   array.push(pessoa.nome)
   array.push(pessoa.nome.length)
   array.push(pessoa.idade)
   array.push(pessoa.profissao)
   array.push(pessoa.profissao.length)
   console.log(array)
}

funcao(nome1)

funcao(nome2)


// 3 
const carrinho = []

const frutas1 = {
   nome: "Maçã",
   disponibilidade: true
}
const frutas2 = {
   nome: "Laranja",
   disponibilidade: true
}
const frutas3 = {
   nome: "Banana",
   disponibilidade: true
}

const itens = (fruta) => {
   carrinho.push(fruta)
}

itens(frutas1)
itens(frutas2)
itens(frutas3)

console.log(carrinho)
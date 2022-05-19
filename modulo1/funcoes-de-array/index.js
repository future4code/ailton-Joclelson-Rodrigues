/* Exercícios de interpretação de código

1 - ira imprimir todos os objetos do array
2 - ira imprimir um array com os nomes
3 - ira imprimir todos os nomes diferentes do apelido chijo
*/

/* Exercícios de escrita de código
// 1 - 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
const nomeDog = pets.map((nome, index, array) => {
     return nome.nome 
 })
//console.log(nomeDog)

//b)
const dogSalsicha = pets.filter((raca) => {
    return raca.raca === 'Salsicha'  
})
console.log(dogSalsicha)

//c)
const msgDesconto = pets.filter((item) => {
    return item.raca == 'Poodle'
}).map((dog) => {
    return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}!`)
})
*/

// 2 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 const nomeProdutos = produtos.map((nome, index, array) => {
    return nome.nome
 })
//console.log(nomeProdutos)

//b
const desconto5 = produtos.map((item) => {
    return [item.nome, item.preco * 0.95]
})
//console.log(desconto5)

//c)
const bebidas = produtos.filter((nome, index, array) => {
    return nome.categoria == 'Bebidas'
})
//console.log(bebidas)

//d)
const items = produtos.filter( item => item.nome.includes("Ypê"))
//console.log(items)

//e)
const promocao = items.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
//console.log(promocao)


//desafios 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)
 const ordemPokemons = pokemons.map( pokemom => pokemom.nome).sort()
 //console.log(ordemPokemons)

 //b)
 const tiposPokemom = pokemons.map( pokemom => pokemom.tipo).filter((item, index,array) => {return array.indexOf(item) === index})
//console.log(tiposPokemom)
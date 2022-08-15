//Exercício 1
//a)
const minhaString:string = "Faruk"

//b)
const meuNumero:number|string = 11

//c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

//d)
enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

const pessoa1:pessoa = {
    nome: "Fabio",
    idade: 32,
    corFavorita: Cores.AZUL
}
const pessoa2:pessoa = {
    nome: "Lucas",
    idade: 16,
    corFavorita: Cores.LARANJA
}
const pessoa3:pessoa = {
    nome: "Anna",
    idade: 26,
    corFavorita: Cores.VERMELHO
}
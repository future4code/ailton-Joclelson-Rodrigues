/* Exercícios de interpretação de código
1 - inicia i em 0 , enquanto  i for menor que 5 ele incrementa 1 | minha resposta na impressão seria de 0 a 4 , mas rodei o codigo e deu 10 nao consegui entender porque
2 - a) numeros maiores que 18 
b) sim , crio uma variavel dentro do for que recebe lista e indico a posição que quero imprimir com console.log(lista[0])
3 - 4 linhas com asteriscos em ordem crescente
*/

// Exercícios de escrita de código
/* 1 
let qtdBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))

const animais = []

if(qtdBichos > 0){
   for(let i = 0; i < qtdBichos; i++){
      let bichos = prompt("Escreva o nome deles")
      animais.push(bichos)
   }
   console.log(animais)
}else{
   console.log("Que pena! Você pode adotar um pet!")
}
*/

//2
const arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

//a)
const imprime = (imprimir) => {
   console.log(imprimir)
}
//imprime(arrayOriginal)


//b)
const dividir = (divisao) => {
   for (let numero of divisao){
      console.log(numero / 10)
   }
}
//dividir(arrayOriginal)


//c)
const pares = () => {
   const novoArray = []
   for(let par of arrayOriginal){
      if(par % 2 === 0){
         novoArray.push(par)
      }
   }
   console.log(novoArray)
}
//pares()


//d)
const arrayString = () => {
   const novoArray = ["oi", 2, 5, "string"]
   for(let i = 0; i < novoArray.length; i++){
      const item = novoArray[i]
      console.log(`O elemento do índex é ${item}`)
   }
}
arrayString()


//e)
const maiorMenor = (array) => {
   let valorMaximo = 0
   let valorMinino = 100

   for(let i = 0; i < array.length; i++){
      const item = array[i]
      if(item > valorMaximo){
         valorMaximo = item
      }
   }
   for(let i = 0; i < array.length; i++){
      const item = array[i]
      if(item < valorMinino){
         valorMinino = item
      }
   }
   console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinino}`)
}
//maiorMenor(arrayOriginal)
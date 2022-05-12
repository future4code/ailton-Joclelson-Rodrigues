//Exercícios de interpretação de código

/*  1
a) undefined
b) null
c) 11
d) 3
e) 
f) 9

2 - SUBI NUM ONIBUS EM MIRROCOS
    27
*/

//Exercícios de escrita de código
/* 1
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/

/*
//2 
const comidasPreferidas = ["Churrasco", "Camarão", "Peixe", "Strogonoff", "Filé ao molho Rôti"]

console.log(`a) ${comidasPreferidas}`)

console.log(`b) Essas são as minhas comidas preferidas:
   ${comidasPreferidas[0]} 
   ${comidasPreferidas[1]}
   ${comidasPreferidas[2]}
   ${comidasPreferidas[3]}
   ${comidasPreferidas[4]}`)

const comidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[+1] = comidaUsuario

console.log(`c) ${comidasPreferidas}`);
*/

// 3 
const listaDeTarefas = []

const tarefa1 = prompt("Qual sua 1º tarefa do dia ?")
const tarefa2 = prompt("Qual sua 2º tarefa do dia ?")
const tarefa3 = prompt("Qual sua 3º tarefa do dia ?")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const tarefarealizada = Number(prompt("Digite o número da tarefa que você ja concluiu?"))

listaDeTarefas.splice(tarefarealizada, 1)

console.log(listaDeTarefas)
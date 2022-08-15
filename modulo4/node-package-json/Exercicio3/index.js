//Exercicio 3
const listasDeTarefas = ["estudar"]

listasDeTarefas.push(process.argv[2])

const res = listasDeTarefas.map((tarefa) => {
    return tarefa
})

console.log(res)

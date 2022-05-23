// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b) => a - b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = array.filter((itens) => itens % 2 === 0)
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayElevado = array.map((itens) => itens ** 2)
    return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for( let i = 0; numerosPares.length < n; i++){
        if(i % 2 == 0){
            numerosPares.push(i)
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
        return 'Equilátero';
    }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
        return 'Isósceles';
    }else {
        return 'Escaleno';
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let primeiroMaior = -Infinity
    let segundoMaior = -Infinity
    let primeiroMenor = Infinity
    let segundoMenor = Infinity

    for(let numero of array){
        if(numero > primeiroMaior){
            primeiroMaior = numero
        }
        if( numero < primeiroMenor){
            primeiroMenor = numero
        }
    }
    for(let numero of array){
        if(numero > segundoMaior && numero !== primeiroMaior){
            segundoMaior = numero
        }
        if(numero < segundoMenor && numero !== primeiroMenor){
            segundoMenor = numero
        }
    }
    const resultado = [segundoMaior, segundoMenor]
    return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa,
    nome: "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAut = pessoas.filter((autorizadas) => {
        return autorizadas.altura >= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60
    })
    console.log(pessoas)
    console.log(pessoasAut)
    return pessoasAut
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasInv = pessoas.filter((itens) => {
        return itens.idade <= 14 || itens.idade >= 60 || itens.altura < 1.5
    })
    return pessoasInv
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const compras = contas.map((cliente) => {
        for(let compra of cliente.compras){
            cliente.saldoTotal = cliente.saldoTotal - compra
        }
        return {...cliente,
        saldoTotal: cliente.saldoTotal,
        compras: []}
    })
    return compras
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordem = consultas.sort()  
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
//Exercício 1 

function checaTriangulo(a:number, b:number, c:number){
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
// console.log(checaTriangulo(5, 10, 10))


//Exercício 2

function imprimeTresCoresFavoritas() {
    const cor1:string = "verde"
    const cor2:string = "vermelho"
    const cor3:string = "Amarelo"

    console.log([cor1, cor2, cor3])
 }
// imprimeTresCoresFavoritas()


 //Exercício 3
function checaAnoBissexto(ano:number) {
   const cond1:boolean = ano % 400 === 0
   const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2
}
// console.log(checaAnoBissexto(2000))


 //Exercício 4
 function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }
//   console.log(comparaDoisNumeros(50, 15))


//Exercício 5
function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ) {
    let idade:number = anoAtual - anoNascimento
    let tempoCarteira:number = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
    }
// console.log(checaRenovacaoRG(2022, 1992, 2016))


//Desafio 
//Exercício 6
function verificarNumero(num1:number, num2:number) {
    let soma:number = num1 + num2
    let subtracao:number = num1 - num2
    let mult:number = num1 * num2
    if(num1 > num2){
        console.log(`O numero ${num1} é maior que ${num2}`)
    }else {
        console.log(`O número ${num2} é maior que ${num1}`)
    }
    console.log(`A soma desses números é ${soma}`)
    console.log(`A subtração desses números é ${subtracao}`)
    console.log(`A multiplicação desses números é ${mult}`)
}
// console.log(verificarNumero(22, 15))


//Exercicio 7
function converteDna(dna:string):string {
    let rna:string = ""
    for(let i = 0; i <dna.length; i++) {
        if (dna[i] === "A") {
            rna += "U"
        } else if (dna[i] === "T") {
            rna += "A"
        } else if (dna[i] === "G") {
            rna += "C"
        } else if (dna[i] === "C") {
            rna += "G"
        } else {
            rna += dna[i]
        }
    }
    return rna
}
// console.log(converteDna("ATTGCTGCGCATTAACGACGCGTA"))


//Exercício 8 
function reverse(text:string) {
    return text.split('').reverse().join('')
}
// console.log(reverse("joclelson"))


//Exercício 9 
function verificacaoLabenu(id:number, esc:string, hora:number, perio:string) {
    let idade:number = id
    let escolaridade:string = esc
    let disponibilidade:number = hora
    let curso: string = perio

    switch(curso){
        case "integral":
            if(idade >= 18 && escolaridade === "sim" && disponibilidade > 40){
                return true
            }else{
                return false
            }
        case "noturno":
            if(idade >= 18 && escolaridade === "sim" && disponibilidade > 20){
                return true
            }else {
                return false
            }
    }
}
// console.log(verificacaoLabenu(30, "sim", 18, "noturno"))
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturamt = Number(prompt("Digite uma altura"))
  const largura = Number(prompt("Digite uma largura"))

  const areaCalc = alturamt * largura
  console.log(areaCalc)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idadPessoae = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const pergunta1 = prompt("Qual sua primeira cor favorita?")
  const pergunta2 = prompt("Qual sua segunda cor favorita?")
  const pergunta3 = prompt("Qual sua terceira cor favorita?")
  
  const cores = []
  cores.push(pergunta1, pergunta2, pergunta3)
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const qtdIngresso = custo / valorIngresso
  return qtdIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length >= string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ele = array[0]
  array.splice(0, 1)
  array.unshift(5)
  array.push(ele)
  console.log(array)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  const check = string1 === string2
  return check
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAt = Number(prompt("Em que ano estamos?"))
  const anoNas = Number(prompt("Qual seu ano de nascimento?"))
  const anoId = Number(prompt("Em que ano sua carteira ID foi emitida?"))

  const idadePessoa = anoAt - anoNas 
  const idadeDocu = anoAt - anoId

  const res = (idadePessoa <= 20 && idadeDocu >=5) || (idadePessoa <= 50 && idadeDocu >=10) || (idadePessoa >= 50 && idadeDocu >= 15)

  console.log(res)
  return res
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maisDe18 = prompt("você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const resultado = (maisDe18 === "sim" && ensinoMedio === "sim" && disponibilidade === "sim") || (maisDe18 === "não" || ensinoMedio === "não" || disponibilidade === "não")
  
  console.log(resultado)
  return resultado
}
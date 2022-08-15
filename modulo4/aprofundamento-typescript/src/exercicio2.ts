//a)
function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort((a:any, b:any) => a - b)

    let soma:any = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
console.log(obterEstatisticas([1,1,1,2,2,5,4,50,60]))


//c)
const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros:number[]) => {numeros}
}

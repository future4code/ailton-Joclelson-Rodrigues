type tipoUsuario = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientesBanco:tipoUsuario[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function verificaValor(array:tipoUsuario[]) {
    const debitoCliente = array.map((iten) => {
        const res:number = iten.debitos.reduce((valAnt, valAtu) => valAnt + valAtu, 0)
        const array = []
        array.push(res)
        iten.debitos = array
        iten.saldoTotal = iten.saldoTotal - iten.debitos[0]
        iten.debitos = []
        return iten
        })
    const resultado = debitoCliente.filter((cliente) => {
        return cliente.saldoTotal < 0
    })
    return resultado
}
console.log(verificaValor(clientesBanco))
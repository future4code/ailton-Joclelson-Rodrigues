enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmes(nomeFilme:string, anoFilme:number, GENERO:string, pontuacaoFilme?:number) {

    if(pontuacaoFilme){
        const tipo = {
            nome: nomeFilme,
            ano: anoFilme,
            genero: GENERO,
            pontuacao: pontuacaoFilme
        }
        return tipo
    }else {
        const tipo = {
            nome: nomeFilme,
            ano: anoFilme,
            genero: GENERO
        }
        return tipo
    }
}
console.log(filmes("Duna", 2021, GENERO.ACAO, 50))
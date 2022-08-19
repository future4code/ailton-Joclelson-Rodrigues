function checastring(nome:string, data:string) {

    const [dia, mes, ano] = data.split("/")

    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}` )
}
// checastring("Joclelson", "11/07/1992")
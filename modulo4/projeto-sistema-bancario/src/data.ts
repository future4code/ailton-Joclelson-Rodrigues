export type usuario = {
    id: string,
    nome: string,
    cpf: string,
    nascimento: string,
    saldo: number,
    debitos: debitos[]
}
type debitos = {
    valor: number[],
    data: string,
    descricao: string
}

export const usuarios:usuario[] = [
    {id: "0sghv1", nome: "Joclelson Rodrigues", cpf: "012.662.052-09", nascimento: "11/07/1992", saldo: 4000, debitos: [{valor: [200], data:"18/08/2022", descricao: "compras"}]},
    {id: "0lghe2", nome: "Jackson Rodrigues", cpf: "016.224.887-95", nascimento: "01/04/1994", saldo: 120, debitos: []},
    {id: "0skhe3", nome: "Karol Bechara", cpf: "025.445.886-52", nascimento: "27/06/1994", saldo: 1500, debitos: [{valor: [520], data:"18/08/2022", descricao: "Salão"}]},
    {id: "0sgie4", nome: "Cleonice Xavier", cpf: "303.477.002-25", nascimento: "17/08/1965", saldo: 8000, debitos: [{valor: [1200], data:"18/08/2022", descricao: "supermercado"}]},
    {id: "0sder5", nome: "Henrique Fernando", cpf: "012.885.445-02", nascimento: "20/04/1995", saldo: 160, debitos: [{valor: [200], data:"18/08/2022", descricao: "bar do nando"}]}
]
/*
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/

function nomesOrdenados(produtos) {
    let copia = produtos.slice()
    copia.sort((a, b) => a.preco - b.preco)

    let nomes = copia.map(produto => produto.nome)
    return nomes
}

let produtos = [
    {nome: "TV", preco: 10},
    {nome: "Fone de ouvido", preco: 7.50},
    {nome: "Computador", preco: 10},
    {nome: "Mouse", preco: 5.50},
    {nome: "Teclado", preco: 2.50},
]

console.log(nomesOrdenados(produtos));

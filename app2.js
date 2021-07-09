const livros = require('./database2')
const readline = require('readline-sync')

const entradainicial = readline.question('Deseja buscar um livro? S/N: ')

if (entradainicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade e estilo vida', '/ Ficcao', '/ Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}
const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "IpadPro", preco: 4500, fragil: true }, 
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]


console.log(produtos.filter(function(e){
    return false
}))

const maiorDoisMil = produto => produto.preco >= 2000
const fragilOuNao = produto => produto.fragil = true

const resultado = produtos.filter(maiorDoisMil).filter(fragilOuNao)
console.log(resultado)
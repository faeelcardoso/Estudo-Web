// criando um filter do 0

Array.prototype.filter2 = function(callback){
    newArray = []
    for ( i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        } 
    }
    return newArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "IpadPro", preco: 4500, fragil: true }, 
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]

const maiorDoisMil = produto => produto.preco >= 2000
const fragilOuNao = produto => produto.fragil

const resultado = produtos.filter2(maiorDoisMil).filter2(fragilOuNao)
console.log(resultado)
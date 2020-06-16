// normal

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: "Notebook",
    preco: 4999,
    desc: 0.15,
    getPreco // posso deixar só assim, que automáticamente vai pegar a função lá em cima
}

global.preco = 20
global.desc = 0.1 

console.log(getPreco())
console.log(produto.getPreco())

// callApply

const carro  = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a única diferencia é quando são mais parâmetros
console.log(getPreco.call(carro, 0.17, "R$")) // o primeiro parâmetro sempre é o contexto
console.log(getPreco.apply(global, [0.17, "R$"]))
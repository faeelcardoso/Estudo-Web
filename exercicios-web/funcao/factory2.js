function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Alguem", 4555,49))
console.log(criarProduto("Outro Alguém", 5566,69))
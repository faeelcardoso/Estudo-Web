// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua abc",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    },{
        nome: "Ana",
        idade: 20
    }],
    calcularValorSeguro (){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // undefined pois foi excluída
console.log(carro.condutores.length) // erro pois length nem existe aqui, cuidado!
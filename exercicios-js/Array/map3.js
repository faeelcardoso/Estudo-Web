// como o map funciona

Array.prototype.map2 = function(callback){
    newArray = []
    for (i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar apenas o preço do JSON

// JSON.parse para transformar o JSON em objeto
const paraObjeto = json => JSON.parse(json)

// agr pra pegar apenas o preço
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
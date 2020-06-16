function mercadoFrutas (fruta){
    switch (fruta){
        case "maçã":
            return "Não vendemos esta fruta aqui!"
        case "kiwi":
            return "Está em falta!"
        case "melancia":
            return "Aqui está, são 3 reais o kilo!"
        default:
            return "Erro"
    }
}

console.log(mercadoFrutas("maça"))
console.log(mercadoFrutas("kiwi"))
console.log(mercadoFrutas("melancia"))
console.log(mercadoFrutas("maçã"))
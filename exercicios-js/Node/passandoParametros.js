module.exports = function(...nomes) {
    return nomes.map(nome => `Boa Semana ${nome}!`)
}

// esse método vai transformar uma lista de nomes em uma lista de saudações com um "Boa semana e o nome da pessoa"
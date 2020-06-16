// CUIDAADO! ao acessar o this

console.log(this === global)
console.log(this === module)

// false pois o this aponta para o module.exports não para global

console.log(this === module.exports)
console.log(this === exports)

// sim, this aponta para o module.exports não para global

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

// Ou seja, muito cuidado no momento que você acessa o this pois ele fora de uma função ele aponta pro module.exports
// porém dentro de uma função ele aponta pra global
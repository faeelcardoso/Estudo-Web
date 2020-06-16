const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

// isso é a mesma coisa disso, só que reduzido
/*const resultado = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}*/

console.log(resultado(7.1))
console.log(resultado(6.7))

// => são as funções arrows
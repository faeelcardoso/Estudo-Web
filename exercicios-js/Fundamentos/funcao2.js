// Armazenando uma funcao em uma variável anônima, ou sem nome

const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma("meu", "piru");

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b 
}

console.log (soma(2, 3));
// Já deu uma reduzida boa no código

// retorno implícito, uma função de uma única linha

const subtracao = (a, b) => a - b
console.log (subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir("Legal!!!");
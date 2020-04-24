// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);
// Aqui em cima é como se fosse o "imprimirSoma = 2, 3" de c#
imprimirSoma(2);
// Não da erro, JS é viagem, a variável a recebe o 2 e a "b" vira undefined, resultado = NaN
imprimirSoma(2, 3, 4, 5, 6);
// Também não dá erro, a linguagem simplismente ignora o resto dos números
imprimirSoma();
// NaN, ou seja, a e a viraram undefined

// Funcao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3));
// Normal, resultado = 5
console.log(soma(2));
// Não da erro, resultado = 2 pois o b recebeu 0 na função
console.log(soma());
// NaN pois o a é undefined
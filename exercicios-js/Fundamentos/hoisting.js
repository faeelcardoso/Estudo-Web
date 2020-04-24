// Hoisting é o içamento ou jogar para cima

console.log("a =", a)
var a = 2
console.log("a =", a);

// Retorna o primeiro "a" undefined e o segundo 2, ou seja, a variável não está declarada mas existe

console.log("b =", b)
let b = 2
// Erro, o efeito hoisting não funciona com let
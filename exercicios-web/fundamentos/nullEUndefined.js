const a = {
    name: "Teste"
}

console.log(a);
// Atribui o nome teste para a constante a
const b = a
// Igualei a constante b com a
console.log(b);
console.log(a);
// constante b agora tbm tem o nome teste e não passei nada para ela
// Ou seja, é uma atribuição por referência, por estar no objeto os dois apontam para o mesmo lugar na memória

// Já aqui funciona diferente

let c = 3
// Atribui para a variável c o valor 3
console.log(c);

let d = c
// Igualei as duas
console.log(c, d);
// As duas com o mesmo valor
d++
// Fiz o incremento em d

console.log(c);
// c sentiu a diferença
console.log(d);
// porém d continua com o mesmo valor anterior, pelo falo de não estar em um objeto, nesse caso como era uma valor primitivo da linguagem foi feita uma cópia por valor
// Quando se trabalha com tipos primitivos uma cópia do valor é passado para d, de tal forma que c tem seu valor, d tem o seu e seus valores são independentes
// Porém, em objetos ou funções, a passagem são feitas em referências onde apontam para o mesmo lugar na memória, o que faz se mudar em um ou no outro, os dois sentem a diferença. Top!
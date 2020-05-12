console.log(soma(3, 4))

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(3, 4))

// a grande diferença da declaration e da expression é que na declaration você pode criar o console antes da função
// pois o leitor do JS primeiro lê todas as funções do código

// named function expression
const mult = function mult(x, y){
    return x * y 
}
console.log(mult(3 ,4))
// essa já não é muito usada, a única vantagem é que serve para debugar o código, achar algum problema
// pois o mult irá aparecer sempre, diferente se a function for anônima, facilitando a descobrir erros
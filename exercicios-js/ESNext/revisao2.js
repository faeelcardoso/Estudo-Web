// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Quando tem um corpo, obrigatório o return

const soma1 = (c, d) => {
    return c + d
}
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () =>  console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// ou seja, o this pode variar em funções tradicionais, ele será global, se o bind estiver no meio vai obrigá-lo a mudar pra onde o bind quer
// porém na arrow function isso não acontece

// Paramêtro Default
// vai assumir o valor padrão

function log(texto = "Node"){
    console.log(texto)
}

log()
log("Sou mais forte!")

// Operador Rest
// você manda operadores espalhados e ele junta tudo em uma única operação

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))

// mais ou menos fiz isso
// n[0] = 1, n[1] = 2 ...
// total = 1 
// 1 = 1 + 2
// total = 3 
// e por ai vai
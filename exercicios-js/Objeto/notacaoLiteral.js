const a = 1
const b = 2 
const c = 3

// forma antiga, para puxar os valores das constaantes ali em cima, se quiser mudar o nome delas tem que continuar usando o método antigo

const obj1 = {a: a, b: b, c: c}
// ES2015
const obj2 = {a, b, c}
console.log(obj1, obj2)

// forma antiga
const nomeAtrb = "nota"
const valorAtrb = 7.82

const obj3 = {}
obj3[nomeAtrb] = valorAtrb
console.log(obj3)
// ES2015
const obj4 = {[nomeAtrb]: valorAtrb}
console.log(obj4)

// forma antiga
const obj5 = {
    funcao1: function (){
        //...
    }, // ES2015
    funcao2() {
        // ...
    }
} 
console.log(obj5)
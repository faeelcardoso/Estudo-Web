var a = 3
let b = 4 

var a = 30
//let b = 40
// Só pra saber que em JS, var pode ser redeclarado, não faz sentido algum mas pode. Porém, sempre usar let.

console.log(a, b);

var a = 300
b = 40

console.log(a, b);

a = 3000
b = 4000
// Aqui ja funciona pois quando você declara uma variável, pode usá-la quantas vezes quiser.

console.log(a, b);

const c = 5
//c = 50
// Isso não funciona pois não posso alterar um valor da constante.

console.log(c);

//Sempre que puder, usar constante.
console.log(typeof Object)
// Object = Função
console.log(typeof new Object)
// Object = objeto. Fiz como um construtor no C#, instanciei a função

const Cliente = function(){}
console.log(typeof Cliente)
// function
console.log(typeof new Cliente)
// object

// Agr para familiarizar um pouco

class Produto {} // a classe no JS é apenas um detalhe de sintaxe, quem exerce o papel de criar classe e instanciar objetos a partir da classe é a função
console.log(typeof Produto)
// function
console.log(typeof new Produto())
// object
// Object.preventExtensions
// ele limita, não deixa adicionar mais atributos no objeto, pode modificar, deletar, mas adicionar não

const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "Promoção"
})

console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha" // true
produto.descricao = "Borra escolar branca" // false
delete produto.tag // true
console.log(produto)

// Object seal
// sela o objeto, podendo ser modificado, porém proibido de deletar e adicionar mais algum atributo

const pessoa = {nome: "Juju", idade: 35}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // false
delete pessoa.nome // false
pessoa.idade = 29 // true
console.log(pessoa)

// Object.freeze = selado + valores constantes, ou seja, writable = false
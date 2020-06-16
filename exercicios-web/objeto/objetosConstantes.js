// a constante não deixa você mudar o endereço de memória pra onde foi apontado
// pessoa -> 123 -> ...

const pessoa = {nome: "Pedro"}
pessoa.nome = "João"
// consigo mudar normalmente
console.log(pessoa)

// pessoa -> 456 -> ...
// pessoa = {nome: "Ana"}
// Aqui já não consigo

Object.freeze(pessoa)
// freeze literalmente congela o objeto em um todo, não só o endereço de memória que aponta

pessoa.nome = "Ana"
pessoa.endereco = "Rua abc"
delete pessoa.nome
// Não consigo fazer nada, nem mudar, nem adicionar, nem deletar por conta do freeze

console.log(pessoa.nome)
console.log(pessoa)
// Passei a ter um objeto constante
// Criando um objeto constante

const pessoaConstante = Object.freeze({ nome: "Ana"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
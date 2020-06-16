// Tira atributos dentro do objeto

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

// Ele tirou nome e idade dentro do objeto pessoa
const {nome, idade} = pessoa
console.log(nome, idade);

// Mudando o nome dos atributos
const {nome: n, idade: i} = pessoa
console.log(n, i);

// Adiciona sobrenome e bemHumorada no objeto pessoa, sendo que bemHumorada já recebe true e sobrenome vai retornar undefined
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

// Adicionei cep no atributo endereco do objeto pessoa
const {endereco : { logradouro, numero, cep = 35498000} } = pessoa
console.log(logradouro, numero, cep);

// única coisa que não tem como fazer, tentar criar algo que nem existe

//const{ conta: { ag, num } } = pessoa
//console.log(ag, num);
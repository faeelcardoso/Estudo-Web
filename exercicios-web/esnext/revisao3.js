// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
// ele mostra os valores de "obj"

console.log(Object.entries(obj))
// mostra o valor explicito de cada uma, uma matriz ou um array de arrays

// Melhorias na Notação Literal
// Antigo

const nome = "Carla"
const pessoa = {
    nome: nome,
    ola: function() {
        return "Oi Gente!!"
    } 
}

// Melhorado
const nome1 = "Carla"
const pessoa1 = {
    nome1,
    ola1() {
        return "Oi Galeera!"
    }
}

console.log(pessoa1.nome1, pessoa1.ola1())

// Classe
// Mas acaba sendo função do mesmo jeito, mesmo com herança, em JS vai virar protótipo ou seja, função
class Animal {}
class Cachorro extends Animal {
    falar () {
        return"Au Au!"
    }
}
console.log(new Cachorro().falar())
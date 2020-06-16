const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

// pega todas as chaves
console.log(Object.keys(pessoa))
// pega todos os valores
console.log(Object.values(pessoa))
// pega todas as chaves e valores
console.log(Object.entries(pessoa))
// usando o forEach para percorrer todos os elementos do array, no qual "e" são os elementos e 0 e 1 são respectivamente chave e valor
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// usando o forEach as destructuring para ficar mais claro
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// agr uma para ter mais controle do objeto
Object.defineProperty(pessoa, "dataNasc", {
    enumerable: true, // para conseguir adicionar a data de nascimento, enumerar 
    writable: false, // aqui funciona como o freeze, congelei e é impossível eu mudar, sobrescrever a dataNasc
    value: "01/01/2020"
})

pessoa.dataNasc = "01/02/2020"
console.log(pessoa.dataNasc)
// não sobrescreveu
console.log(Object.keys(pessoa)) // data de nascimento aparece pois setei que é enuberada

// Object.assigh (ES 2015), ele basicamente concatena todos os objetos e se ter algum objeto com nome de variável igual, ele sobrescreve
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // irá sobrescrever o "a"
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
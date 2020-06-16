// map é um for com propósito
// forEach só percorre o array, map você consegue mexer um pouco a mais, você já transforma o array e cria um novo array

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
// criou um novo array com base no primeiro, e multiplicou por 2

// da pra fazer isso sucessivamente tbm

const soma10 = e => e + 10 // lembrando que no arrow ja tem um return implícito
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`
// parseFloat transforma a string no double, tofixed pra 2 casas decimais e replace troca o . pela , 

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
// ou seja, ele pegou o array nums, somou 10, pegou 10 e triplicou e transformou pra dinheiro tudo de uma vez
// top!
// reduce é o mais complicado, ele sempre pega o valor atual e um acumulador, que vai acumulando até o resultado
// pode ser passado também um valor inicial

const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: false }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // valor inicial, caso tenha dúvida coloca 0 em vez de 10 e ve oq acontece

console.log(resultado)
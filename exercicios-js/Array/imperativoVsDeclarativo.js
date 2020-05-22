const alunos = [
    { nome: "João", nota: 7.9 },
    { nome: "Maria", nota: 9.2 }
]

// Imperativo
// se preocupa mais com o como, não com o porque. tem que dar detalhe por detalhe
let total1 = 0 
for (let i = 0; i < alunos.length; i++ ){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativo
// o contrário, se preocupa com o porque e o como é executado internamente. um código mais funcional
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) // reduce consegue reduzir e de agregar os valores em um só
console.log(total2/alunos.length)

// um código SQL é um código declarativo
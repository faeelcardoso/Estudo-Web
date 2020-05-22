const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.1
    }, {
        nome: "Ana",
        nota: 9.3
    }]
}, {
    nome: "Turma M2",
    alunos: [{
        nome: "Rebeca",
        nota: 8.9
    }, {
        nome: "Roberto",
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const GetNotasDasTurmas = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(GetNotasDasTurmas)
console.log(notas1)

// flatMap não existe na API, tem que criar

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(GetNotasDasTurmas)
console.log(nota2)

// mesma coisa que isso

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]], "abc"))
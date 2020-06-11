// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

const { groupCollapsed } = require("console")

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativa: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Gloria', ...grupoA, 'Eustacio']
console.log(grupoFinal)
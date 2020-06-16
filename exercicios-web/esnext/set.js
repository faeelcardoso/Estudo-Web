// não aceita repetição e não é indexido, não possui índice
const times = new Set()
times.add('Vasco')
times.add('Cruzeiro').add('Atletico').add('Flamengo')
times.add('Corinthians')
times.add('Cruzeiro') // vai ignorar, set não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('cruzeiro')) // false pois nao coloquei em letra minuscula
console.log(times.has('Cruzeiro'))
times.delete('Atletico')
console.log(times.has('Atletico'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
// retorna os nomes porém corrigidos sem repetição
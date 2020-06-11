// estrutura map permite do lado da chave função, objeto, número, string ...
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map ([
    [function () {}, 'Função'],
    [{}, 'Objeto'], 
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // o has pergunta se um elemento está ou não contido dentro desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // quantos elementos o map possui

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
// o Map não aceita duas chaves iguais, ou seja, sobrescreve e aparece só 123 - b
console.log(chavesVariadas)
// Porém aceita dois valores iguais
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
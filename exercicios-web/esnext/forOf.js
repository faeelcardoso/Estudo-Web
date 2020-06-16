// forOf você pode percorrer entre chaves e valores, diferentes do forIn que corre só pelo índice
for (let letra of "Cod3r") [
    console.log(letra)
]

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// for in retornou indices, for of retornou os valores

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
// for of percorre Map

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
// traz só a chave

for (let valor of assuntosMap.values()) {
    console.log(valor)
}
// traz só o valor

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
// desestrutura e tras a chave e o valor separados

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
// percorre Set tbm
const nome = "Rebeca"
const concatencao = "Olá " + nome + "!"

// Agr um template string
const template = `
    Olá
    ${nome}!`

console.log(concatencao, template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado!")}`);
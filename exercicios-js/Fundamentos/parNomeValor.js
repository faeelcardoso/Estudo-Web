// par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = "Falai"
    return saudacao
}
// Não vai dar problema pois "saudacao" são contextos diferentes

// Objetos são grupos aninhados de pares nomes valor
const cliente = {
    nome: "Raphael",
    idade: 20,
    peso: 66,
    endereco: {
        logradouro: "Rua So nois queis",
        numero: 99
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente);
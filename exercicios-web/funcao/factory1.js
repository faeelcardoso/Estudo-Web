// Função Factory é uma função que retorno um objeto, factory = fábrica
// ela tem a funçaõ de fabricar, criar uma instancia de objeto

// o normal a se fazer

const prod1 = {
    nome: "...",
    preco: 45
}

const prod2 = {
    nome: "...",
    preco: 33
}

// agr imagina 100 produtos kkkkk, slk

// Factory Simples

function criarPessoa(){
    return {
        nome: "Ana",
        sobrenoem: "Silva"
    }
}
console.log(criarPessoa())

// Bem mió
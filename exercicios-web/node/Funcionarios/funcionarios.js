const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

// o "axios" é um client http, ele faz requisições para obter informações de algo que esta remoto
// ou seja, ele vai pegar os arquivos do servidor da cod3r

const chineses = f => f.pais === "China"
const mulheres = f => f.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

// TOP!!!
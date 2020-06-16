// Uma função que não recebe inicialmente nenhum parâmetro, não quer dizer que não pode passar nenhum parâmetro
// O jeito mais old school de recuperar esses parâmentros é com o "arguments", que é um array interno de uma função

function soma(){
    // sem parâmetro
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
        // atribuição aditiva
    }
    return soma
}

// útil
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

// não útil
console.log(soma(1.1, 2.2, " teste"))
console.log(soma("a", "b", "c"))
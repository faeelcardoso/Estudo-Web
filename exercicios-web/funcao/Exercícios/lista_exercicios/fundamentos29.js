function intervaloVetor (vetor){
    qtdNumerosDentro = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosDentro++
        }
    }
    return `${qtdNumerosDentro} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(intervaloVetor(vetor))
function paresImpares (vetor){
    let vetorImpar = 0
    let vetorPar = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 == 0){
            vetorPar++
        } else {
            vetorImpar++
        }
    }
    console.log(`${vetorPar} números pares e ${vetorImpar} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
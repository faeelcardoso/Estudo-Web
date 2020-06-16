function imprimirNegativos (vetor){
    numNegativos = 0
    for (i = 0; i < vetor.length; i++){
        if (vetor[i] < 0)
        numNegativos++
    }
    return numNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(imprimirNegativos(vetor))
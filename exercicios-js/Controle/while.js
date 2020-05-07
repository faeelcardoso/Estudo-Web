function getInteiroAleatorioEntre(min, max){
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`)
}

console.log("Até a próxima!")

/* Importante: while ou não executa nenhuma vez ou executa "n" vezes.
   Ou seja, se no início já fosse -1, nem iria executar. Ou seja, while executa enquanto for verdadeiro, no momento que for falsa sai do laço.
   Ela é própria para executar laços que tem uma quantidade indeterminada de repetições.*/
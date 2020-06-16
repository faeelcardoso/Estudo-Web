const imprimirResultado = function(nota){
    if (nota > 7 ) {
        console.log("Aprovado !")
    } else {
        console.log("Reprovado !")
    }
}

imprimirResultado(8)
imprimirResultado(7)
imprimirResultado("Epaaa") // Imprimir do mesmo jeito e não dá erro, tomar muito cuidado com linguagens fracamente tipada
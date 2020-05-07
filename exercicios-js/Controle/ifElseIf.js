/* Ex... Sou um Number, vou acessar o valor da varável atual com o this, e o prototype.entre vai server para comparar
   se o this está entre o valor de inicio e o valor de fim e retornar um valor boolean
   É como se fosse o "entre" do c#, se o número estiver entre 5 a 10, retorna Aprovado, mas eu n lembro mais como faz kkkkkk */

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim 
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log("Quadro de Honra")
    } else if (nota.entre(7, 8.99)){
        console.log("Aprovado")
    } else if (nota.entre(4, 6.99)){
        console.log("Recuperação!")
    } else if (nota.entre(0, 3.99)){
        console.log("REPROVADO!!!")
    } else {
        console.log("Nota Inválida!")
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(-1)
imprimirResultado(11)
const notas = [7.7, 8.8, 4.4, 9.7, 6.7, 5.9]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i]) // push adiciona um elemento no array, já tinha visto
    }
}
console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (notas){
    // filter é uma função que vai filtrar os elementos de um array em cima de um determinado critério que vai ser uma função callback
    // que irá retornar true ou false, ou seja, se essa função retornar true significa que esse elemento deve ser adicionado no array que está sendo gerado
    // se retornar false quer dizer que esse elemento não será adicionado 
    return notas < 7
})
console.log(notasBaixas2)
// bem mais fácil, não precisei criar outro array vazio, nem for ou if, show!

// agr pra reduzir ainda mais com arrow 

const notasMenorque7 = nota => nota < 7
// dessa forma posso chamar essa função em qualquer lugar do meu código
const notasBaixas3 = notas.filter(notasMenorque7)
console.log(notasBaixas3)
// show de bola caraio!
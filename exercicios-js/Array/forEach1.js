// forEach serve para percorrer todos os elementos de um array
// ele sempre pode retornar respectivamente, nome, índice e o próprio array

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirResultados = aprovados => console.log(aprovados)
aprovados.forEach(exibirResultados)
const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Massa quebrou o carro de nv kkkkkk, ou seja, pop remove o último elemento do array
console.log(pilotos)

pilotos.push("Verstappen") // adiciona um novo elemento no final do array
console.log(pilotos)

pilotos.shift() // parecido com pop, porém remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("Hamilton") // parecido com o push, porém adiciona um novo elemento no início do array
console.log(pilotos)

// add
pilotos.splice(2, 0, "Bottas", "Massa") // antes do índice do vou add dois elementos, e não irei excluir nenhum
console.log(pilotos)

// del
pilotos.splice(3, 1) // massa quebrou o carro de novo. Irá remover o indice três e não irá add nenhum
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice pega um pedaço do array, ou seja, ali ele vai pegar o array pilotos e pegar tudo a partir do elemento 2, sem contar ele
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // faz a mesma coisa, pega um pedaço do array e cria um novo, do 1 até 4, sem contar o último elemento, no caso o 4
console.log(algunsPilotos2)

const algunsPilotos3 = pilotos.slice(1, 5) // faz a mesma coisa do exemplo de cima mas agr pega do 1 até 4
console.log(algunsPilotos3)

// cabuloso, muita coisa que dá pra fazer com array toppppp!!
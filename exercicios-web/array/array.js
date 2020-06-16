console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // não dá erro, dá undefined

aprovados[3] = "Paulo" // não é ideal para adicionar, funciona melhor para modificar
aprovados.push("Abia") // esse é ideal para adicionar
console.log(aprovados.length) // para saber o tamanho do array

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // uma forma de excluir um elemento do array, porém não ordena, fica lá um valor undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1) 
// splice é o método mais flexivel, ele pode adicionar ou excluir 
// no primeiro elemento voce colcoca a partir de onde você vai começar a trabalhar, por exemplo, elemento 1 = a partir do "Carlos"
// se desejo excluir, splice(1, 1) irá excluir o "Carlos". splice (1, 2), a partir do Carlos irá excluir dois, ou seja "Carlos e Ana"
// se desejo adicionar, splice (1, 0, "Rafael", "Carlinhu"), irá antes do Carlos add mais 2 alementos e não irá excluir nenhum 
// se desejo add e del, splice (1, 1, "Rafael"), irá antes do Carlos add Rafael e deletar o Carlos 
// Cabuloso e ainda reordena tudo que você faz
console.log(aprovados)
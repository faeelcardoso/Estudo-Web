const pai = {nome: "Pedro", corCabelo: "preto"}

const filha1 = Object.create(pai) // faz igual um ctrl c do pai
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Bia", writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? // tem uma própria propriedade ?
    console.log(key) : console.log(`Por herança: ${key}`) // o que ela tem de um lado e o que ela nao tem, ou seja é por herança de outro
}

// show top demais!
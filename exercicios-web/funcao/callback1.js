const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
// forEach é como se fosse chamar de volta, para cada elemento que ele encontrar no array fabricantes, ele vai chamar a função imprimir, passando os params nome e indice

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
// aqui como só tem um, só irá chamar o que está no array

// ou mais reduzido no array

fabricantes.forEach(fabricante => console.log(fabricante))

// callback é passar uma função e essa função será chamada quando um evento acontecer, nesse caso é o loop´, sempre que encontrar um elemento irá chamar de volta o callback
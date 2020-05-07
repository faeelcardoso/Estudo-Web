const notas = [6.7, 7.8, 8.9, 9.1, 9.2]
// For in é outra forma de percorrer o array ou o objeto sem ser com o length
for (let i in notas){
    console.log(i, notas[i])
}

// agr com o objeto
const pessoa = {
    nome: "Raphael",
    sobrenome: "Marques",
    idade: 20,
    peso: 66
}

// forma maior concatenando
for (let i in pessoa){
    console.log(i + " = " + pessoa[i])
}

// forma reduzida, tentar fazer só assim
for (let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}
const fs = require("fs")

const produto = {
    nome: "Celular",
    preco: 1299.99,
    desconto: 0.15
}

// agr vou salvar ele no disco, para isso vou passar ele para string e JSON

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), err => {
    console.log(err || "Arquivo Salvo!") // aq eu criei um true/false, caso o err venha null, ou seja deu certo oq eu fiz, vai imprimir Arquivo Salvo
})
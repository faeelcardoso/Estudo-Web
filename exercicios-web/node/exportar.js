console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)
// para usar um objeto já criado, pode usar ele com

this.a = 1
exports.b = 2
module.exports.c = 3

// porém para criar um novo objeto, só funciona com o module.exports

exports = null
console.log(module.exports)

// não funciona

exports = {
    nome: "Teste"
}

console.log(module.exports)

// não funciona

module.exports = { publico: true }

// agr funfa

// ou seja o "this" e o "exports" são só duas referencias que o module.exports aponta. Para criar um novo objeto, somente o module.exports cria
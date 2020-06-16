// Closare é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto Légico em ação!

const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    // a função foi definidade aqui
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

// ou seja, a função lembra de suas origens e irá acessar a variável x local, pois ela foi definida ali
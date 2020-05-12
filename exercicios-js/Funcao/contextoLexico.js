const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()

// retorna Global por conta do contexto léxico, pois a função carrega consigo o local onde ela foi definida
// ou seja, ela vai procurar no contecto léxico não no local de execução mas sim o local fisico onde ela foi declarada
// criando um forEach do 0, como forEach funciona
// callback pega a função anterior que quero usar, ou seja, la em baixo

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
        // callback (valor de cada indice, indice, array)
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
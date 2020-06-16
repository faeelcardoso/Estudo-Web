Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for ( i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))

// já mandando um valor inicial

Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for ( i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma1 = (total, valor) => total + valor
const nums1 = [1, 2, 3, 4, 5, 6]     
console.log(nums1.reduce2(soma1, 21))
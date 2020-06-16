function compras(work1, work2){
    const comprarSorvete = work1 || work2 // operador binário, ou
    const comprarTv50 = work1 && work2 // operador binário, e
    const comprarTv32 = work1 != work2 // operador binário, ou exclusivo, work1 é diferente de work2
    const ficarSaudavel = !comprarSorvete // operador unário, negação lógica

    return { comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel} // par chave e valor resumido
    // comprarSorvete: comprarSorvete,
    // comprarTv50: comprarTv50... dá na mesma
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false,true))
console.log(compras(false, false))
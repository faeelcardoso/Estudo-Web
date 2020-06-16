// o normal seria:
let dobro = function (a) {
    return 2 * a
}

// agr com arrowFunction, já da uma enxugada
dobro = (a) => {
    return 2 * a
}
// arrow é uma função anônima

// agr, quando você irá criar uma função com apenas uma única sentença de código, da pra ficar ainda menor, sem precisar de blocos e o return já é implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
console.log(ola())
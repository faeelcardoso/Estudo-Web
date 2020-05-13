function lerNumeros (numero){
    switch (numero){
        case 0:
            return "zero"
        case 1:
            return "um"
        case 2:
            return "dois"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        default:
            return "Numero invalido!!"
    }
}

console.log(lerNumeros(0))
console.log(lerNumeros(1))
console.log(lerNumeros(2))
console.log(lerNumeros(3))
console.log(lerNumeros(4))
console.log(lerNumeros(5))
console.log(lerNumeros(10))
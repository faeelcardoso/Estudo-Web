function calculadoraBasica(op1, sinal, op2){
    switch (sinal){
        case "+":
            return op1 + op2
        case "-":
            return op1 - op2
        case "*":
            return op1 * op2
        case "/":
            return op1 / op2
        default:
            return "Operação inválida!!!"
    }
}

console.log(calculadoraBasica(10, "+", 10))
console.log(calculadoraBasica(10, "-", 10))
console.log(calculadoraBasica(10, "*", 10))
console.log(calculadoraBasica(10, "/", 10))
console.log(calculadoraBasica(10, "somar", 10))
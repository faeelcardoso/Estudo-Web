function calcularTriangulo (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log("Equilátero")
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("Isósceles")
    } else {
        console.log("Escaleno")
    }
}

calcularTriangulo(10, 10, 20)
calcularTriangulo(5, 12, 50)
calcularTriangulo(5, 5, 5)
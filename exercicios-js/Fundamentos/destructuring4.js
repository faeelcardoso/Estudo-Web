function rand([min = 0, max = 1000]) {
    // Ou seja, se mínimo for maior do que o máximo, irá inverter as duas variáveis
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
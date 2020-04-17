console.log(7 / 0);
// Tipo infinity, que viagem.

console.log("10" / 2);
// Dá certo, o próprio JS transforma a string 10 em number.

console.log("10" + 2);
// Aqui não efetua a operação pois a string tem prioridade, em vez de somar ela concatena

console.log("10" - 2);
// Aqui já funciona a operação como a string não faz sentido

console.log("Show!" * 10);
// Aqui já buga, NaN.

console.log(0.1 + 0.7);
// Resultado é 0.79999999, não 0.8

console.log(0.1 + 0.9);
// Aqui já dá como resultado 1.

console.log((10.345).toFixed(2))

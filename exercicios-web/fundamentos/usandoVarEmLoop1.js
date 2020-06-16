// Só pra ter idéia do problema do var

for (var i = 0; i < 10; i++){
    console.log(i)
}
// Tranquilo, foi até 9, porém

console.log("i=", i);
// Viagem demais, com o var fora do escopo ele retorna o valor que ele tinha quando era falso, no caso 10
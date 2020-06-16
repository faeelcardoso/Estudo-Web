const peso1 = 1.0
const peso2 = Number("2.0")
// Viagem pra caralho, no c# ia bugar demais.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
// Para saber é peso um é inteiro.

const peso3 = 1.1
console.log(peso3);
console.log(Number.isInteger(peso3));
// Aqui ele já não é inteiro.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media);
console.log(media.toFixed(2));
// Reduz para 2 casas decimais.

console.log(media.toString());
// Volta ao valor original.

console.log(media.toString(2));
// Transforma o number para números binários.

console.log(typeof media);
// Tipo number.

console.log(typeof Number);
// Ou seja, Number maiúsculo = função e number minúsculo é o tipo do dado. Buga.
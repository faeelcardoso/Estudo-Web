const valores = [7.7, 7.8, 7.9, 8.0]
// Array é o vetor

console.log(valores[0], valores[3]);
// Mostra o valor nas posições 0 e 3
console.log(valores[4]);
// Na posição 4 não tem nada, porém no JS não dá erro, retorna undefined

valores[4] = 9.0
// Adicionei a posição 4
console.log(valores);
// Mostra tudo que está no array
console.log(valores.length);
// Mostra quantos valores tem dentro do array

valores.push({id: 3}, false, null, "teste");
// push adiciona novos elementos
console.log(valores);
// Posso adicionar de tudo dentro do array, porém não é recomendado, mas posso

console.log(valores.pop());
// pop remove o último elemento do array
console.log(valores);

delete valores[0]
// delete remove o valor que você quiser
console.log(valores);
valores[0] = 1.1
console.log(valores);

console.log(typeof valores);
// Array é um objeto
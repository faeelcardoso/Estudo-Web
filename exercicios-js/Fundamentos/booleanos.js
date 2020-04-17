let isAtivo = false
console.log(isAtivo);
// Retorna falso, o esperado

isAtivo = true
console.log(isAtivo);
// Retorna true

isAtivo = 1
console.log(!!isAtivo);
// Retorna true

console.log("Os verdadeiros...");

console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");

console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar..."); 

console.log(!!("" || null || 0 || "eeeeepa"));
// Se ter somente um verdadeiro, retorna verdadeiro

console.log("Por fim um if diferenciado...");

let nome = "Raphael"
console.log(nome || "Desconhecido");
// Ou seja, se nome for verdadeiro, retorna nome se não...

nome = ""
console.log(nome || "Desconhecido");
// Toooooop!
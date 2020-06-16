const escola = "Cod3r"

console.log(escola.charAt(4));
// Resultado é a letra r, pois a contagem inicia do 0

console.log(escola.charAt(5));
// Não tem nada no 5, em algumas linguagens daria um erro, no JS só imprime vazio

console.log(escola.charCodeAt(3));
// Imprime o valor do 3 na tabela ASCII

console.log(escola.indexOf("3"));
// Imprime o resultado 3 por ser o índice associado ao digito 3 que está dentro da variável escola

console.log(escola.substring(1));
// Imprime começando do índice 1, ou seja, irá ignorear o C de Cod3r

console.log(escola.substring(0, 3));
// Vai do 0 ao índice 3, sem incluir o índice 3

console.log("Escola ".concat(escola).concat("!"));
// Concatenar

console.log("Escola " + escola + "!");
// Concatenar estilo c#

console.log(escola.replace(3, "e"));
// Substitui o dígito 3 pela letra e

console.log("Ana, Maria, Pedro".split(","));
// Um pouco de array
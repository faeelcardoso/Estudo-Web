// Cuidados pois {} é objeto e [] é array ou vetor
// Criando array, [] do lado direito da operação
// Criando destructuring [] do lado esquerdo da operação
// Criando variável "a" que recebeu o valor de 10 no primeiro elemento do array

const [a] = [10]
console.log(a)

// Aqui buga, n1 pegou 10, n2 7 porém pulou ele, n3 9, n4 8 porém pulou, n5 não tem mais valor então undefined e n6 ja foi atribuido 0
// Assim tira vários elementos de um array, extraindo e atribuindo a várias variáveis 
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

// Último exemplo nunca iria usar na prática, só uma forma de entender
// Ignora o primeiro array todo, do segundo array ignora o primeiro elemento e extrai o segundo que é o 6
const [, [, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota); 
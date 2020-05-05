// { min = 0, max = 1000} isso é um destructuring
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// Math retorna um número sempre positivo
// Random sugere um número randômico
// Floor retorna um número inteiro dentro de (x) e arredondando para baixo

// {obj n= {max: 50, min:40 } isso é um objeto
const obj = { max: 50, min: 40 }
console.log(rand(obj));
console.log(rand({ min: 955}))
console.log(rand({}))

// Além de usar o destructuring, posso beneficiar dos parâmetros padrões e ter várias alternativas diferentes para chamar a mesma função
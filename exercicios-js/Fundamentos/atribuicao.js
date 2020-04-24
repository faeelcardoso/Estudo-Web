const a = 7
let b = 3

b += a // mesma coisa que b = b + a
console.log(b)
// 10

b -= 4 // mesma coisa que b = b - 4
console.log(b)
// 6 

b *= 2 // mesma coisa que b = b * 2
console.log(b)
// 12

b /= 6 // mesma coisa que b = b / 2
console.log(b)
// 6

b %= 2 // mesma coisa que b = b % 2, se o resto for par é 0, se for ímpar é 1
console.log(b)
// 0 pois o resto é 6
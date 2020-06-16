console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// cuidado ao fazer isso, adicionar uma função no prototype.
// split transforma tudo em array, uma palavra separada por letras, reverse inverte tudo e join junta
String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}

console.log("Estudo Web".reverse())

Array.prototype.first = function(){
    return this[2]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c", "d"].first())

// jamais fazer isso aqui, substituir comportamentos que já existam, o problema pode ser enorme!!!!
String.prototype.toString = function() {
    return "Lascou foi tudo!!" 
}

console.log("Estudo Web".reverse())
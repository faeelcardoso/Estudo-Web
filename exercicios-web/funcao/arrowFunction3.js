let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)
// global é sim estritamente igual a this, ele aponta para global
// ou seja, tem que tomar muito cuidado, em uma função normal o this fica em escopo global mesmo ele dentro dos blocos

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
// false, agr o this não aponta mais para global por conta do bind, amarrou ela no obj, tranquilo 
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
// false, pois em uma função arrow não aponta para global
comparaComThisArrow(module.exports) // aponta para o module.exports, lembrando que posso acessar o module.exports pelo uso do this

// agr que vem a sacada, quem é mais forte o bind ou arrow

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// o resultado é false, o arrow amarrou o this la em cima em module.exports e pronto, ele ganha a luta
comparaComThisArrow(module.exports)
// aaaa doidera, confusão demais
// ou seja, cuidado com função normal com o this variando, já com arrow jamais, ele amarra memo
function diaSemana (dia){
    switch (dia){
        case 1: 
            return "Fim de semana"
        case 2: 
        case 3: 
        case 4:
        case 5:
        case 6:
            return "Dia da semana"
        case 7:
            return "Fim de semana"
        default:
            return "Dia inválido!"
        break
    }
}

console.log(diaSemana(78))
console.log(diaSemana(1))
console.log(diaSemana(3))
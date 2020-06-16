function anoBissexto(ano){
    if (ano <= 0){
        return false
    } else if ( ano % 400 == 0){
        return true 
    } else if ( ano % 100 == 0){
        return false
    } else if (ano % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(2000))
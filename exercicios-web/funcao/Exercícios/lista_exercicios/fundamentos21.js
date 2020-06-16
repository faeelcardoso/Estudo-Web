function convenio(idade){
    if (idade < 10){
        return "R$180,00"
    } else if (idade >= 10 && idade <= 30){
        return "R$150,00"
    } else if (idade > 30 && idade <= 60){
        return "R$195,00"
    } else if (idade > 60){
        return "R$230,00"
    }
}

console.log(convenio(20))
console.log(convenio(64))
console.log(convenio(30))
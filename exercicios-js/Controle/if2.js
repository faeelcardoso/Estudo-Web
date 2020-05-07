function teste1 (num){
    if (num > 7) 
        console.log(num)

    console.log("Final")
}
// preferir sempre usar blocos 

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ; { // cuidado com o ponto e vírgula, saiu 6 e 8 lá em baixo. Não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)
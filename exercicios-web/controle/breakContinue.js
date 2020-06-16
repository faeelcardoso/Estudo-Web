const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in num){
    if (i == 5){
        break
        // o break vai interromper e pular para a próxima sentença de código.
        // funciona no for, while e switch
    }
    console.log(`${i} = ${num[i]}`)
}

for (let i in num){
    if (i == 5){
        continue 
        // ele interrompe a repetição corrente e vai para a próxima repetição, para a repetiçaõ atual e vai para próxima dentro do laço. 
        // funciona no for e while
    }
    console.log(`${i} = ${num[i]}`)
}

// Rótulos

externo: for (let i in num){
    for(let j in num){
        if(i == 2 && j == 3) break externo
        console.log(`Par = ${i}, ${j}`)
    }
}

// é um jeito de colocando os pares, mas NÃO USAR ESSES RÓTULOS DE FORMA ALGUMA kkkkkkkkkkk cê tá doido
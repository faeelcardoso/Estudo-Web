const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

// Já aqui retorna 2 e 8 porque let obedece o escopo de bloco
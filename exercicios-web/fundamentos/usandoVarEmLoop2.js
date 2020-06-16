const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

// Retorna 10 nos 2 pois o "var" não obedece escopo
function cardapioLanchonete  (codigo, qtd){
    switch (codigo){
        case 100:
            console.log(qtd + " cachorro quente = Valor R$ " + 3.0 * qtd +".")
            console.log("Muito thanks!")
            break
        case 300:
            console.log(qtd + " cheseburguer = Valor R$ " + 10.0 * qtd + ".")
            console.log("Muito Thanks!")
            break
        case 600:
            console.log(qtd + " suco = Valor R$ " + 6.4 * qtd + ".")
            console.log("Muito Thanks!")
            break
        case 1000:
            console.log(qtd + " combo suco e cheseburguer = Valor R$ " + 12 * qtd + ".")
            console.log("Muito Thanks My Friend!")
            break
        default:
            console.log("Produto inválido!")
    }
}

cardapioLanchonete(100, 1)
cardapioLanchonete(300, 3)
cardapioLanchonete(600, 2)
cardapioLanchonete(1001, 1)
cardapioLanchonete(1000, 1)
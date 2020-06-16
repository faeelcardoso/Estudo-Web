function comprarCarro (carro){
    switch (carro){
        case "hatch":
            return "Compra efetuada com sucesso!"
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que prefere esse modelo?"
        default:
            return "Não trabalhamos com este tipo der automóvel aqui!"
    }
}

console.log(comprarCarro("hatch"))
console.log(comprarCarro("sedan"))
console.log(comprarCarro("hilux"))
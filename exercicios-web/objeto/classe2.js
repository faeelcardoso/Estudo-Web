class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// extendes serve para aplicar a herança no âmbito da classe, é como se fosse o __proto__ ou setPrototypeOf
class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome) // super serve para mandar o que esta no sobrenome la pra cima, ou seja do pai para o avô
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor() {
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)
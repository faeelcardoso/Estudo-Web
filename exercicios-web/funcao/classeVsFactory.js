class Pessoa {
    constructor(nome){
        this.nome = nome 
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()

// Dessa forma se for executada no Browser, ela sai como undefined pois o this varia

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa("João")
p2.falar()

// Dessa forma não varia, factory e arrow
// Cadeia de protótipos (prototype chain)
Object.prototype.atrb0 = "0" // Ao fazer isso, cuidado!!!
const avo = {atrb1: "a"}
const pai = {__proto__: avo, atrb2: "b", atrb3: "3"}
const filho = {__proto__: pai, atrb3: "c"} // shadowing/sombreamento
console.log(filho.atrb0, filho.atrb1, filho.atrb2, filho.atrb3) // uma forma de fazer a herença

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // shadowing
}

const volvo = {
    modelo: "V40",
    status (){
        return `${this.modelo}: ${super.status()}` // do mesmo jeito que usa o this para referenciar o objeto atual. Usa o super para referenciar o protótipo atual
        // vai sobrescrever o status
    }
}

Object.setPrototypeOf(ferrari, carro) // outra forma de fazer herança
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
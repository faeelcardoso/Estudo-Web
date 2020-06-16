function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público, sempre usando this vou poder chamar fora dessa função, como o this representa sempre o objeto atual criado
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro // instanciei
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // funcao
console.log(typeof ferrari) // objeto que foi instanciado a partir da função construtora Carro funcionando como um molde

// Classe/Função funciona como um molde
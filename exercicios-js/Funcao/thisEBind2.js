// setinterval dispara uma outra função a partir do intervalo que você passou, que no caso é 1000 milisegundos, é uma função temporizadora

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000) // significa que a cada milisegundos vai rodar o código, ou seja, a cada 1 segundo
}

new Pessoa
// retorna NaN, pois o this não está apontando para "Pessoa" e sim para a função, o que pode ser resolvido pelo "bind"

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //this foi amarrado agr em pessoa
}
new Pessoa 
// deu pra entender até 

// outra forma de corrigir isso é armazenando o this em uma constante em uma linha que está sendo executada diretamente na função pessoa
function Pessoa(){
    this.idade = 0

    const self = this // aqui está a jogada de mestre, nesse linha o this é literalmente o objeto que eu quero apontar, ou seja, a constante não vai mudar nunca
    // não importa quem chame a constante, "self" sempre será o mesmo

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa
// é uma grande forma de driblar o this que varia kkkkk assim não importa quem chame o self que não irá mudar, o this encravou
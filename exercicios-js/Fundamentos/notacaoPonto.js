console.log(Math.ceil(6.1))
// ceil arredonda pra cima, ou seja, 7

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome;
    // this serve para eu poder acessar a função de fora do escopo, ou seja, transforma em público
    // em outras palavras o "nome" ficara visível para quem instanciar, criar um objeto do tipo Obj
    this.exec = function(){
        console.log("Exec...")
    }
}

const obj3 = new Obj("Mesa")
const obj2 = new Obj("Cadeira")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
// Confuso pra caralho

// Usa a notação ponto para acessar atributos que são visíveis em determinados objetos, seja usando notação literal, seja a partir de uma função...
// ...seja usando de um objeto da própria API do JS, como o Math. Você acessa os membros de um objeto ou de uma função sempre usando a notação ponto.
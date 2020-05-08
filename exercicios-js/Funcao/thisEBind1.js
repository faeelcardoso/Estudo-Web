const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // undefined. conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // resolvido
// bind você passa o objeto no qual quer que seja resolvido o this, passando pessoa como argumento para a função bind significa que sempre o this será resolvido para "pessoa"
// o bind amarra determinado tipo específico, resolve alguns problemas do this, bem confuso :v
function tratarErroELancar(erro){
    throw new Error("Erro no obj nome, msg enviada para suporte, por favor aguarde.")
    // throw 10
    // throw true
    // throw "deu erro"
    /* throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
}    

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log("Ok")
    }
}

const obj = { nome: "Raphael"}
imprimirNomeGritado(obj)

// try = vai tentar executar o código
// catch = deu erro entra no catch e executa o método
// throw = mensagem que aparece para o usuário mostrando que deu erro
// finally = mais usado para programadores entenderem que chegou no final
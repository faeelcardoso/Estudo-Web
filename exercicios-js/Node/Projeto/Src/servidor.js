// SRC fica o código fonte
const porta = 3003 // porta significa processo, não basta somente o IP

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

app.use(bodyParser.urlencoded( { extended: true })) // aqui sempre que for executado para o urlencoded, vai fazer um parse e transformar tudo em objeto
// ou seja, quando você não coloca nenhuma url expecífica, vai usar o urlencoded lá no postman
// quando não usa o get nem o post, coloca o "use", ele funciona em qualquer um dos dois na hora de executar no postman

app.get("/produtos", (req, res, next) => { // requisição, resposta e next
    res.send(bancoDeDados.getProdutos())
})
// get = pegar, ou seja, pegar alguma informação do servidor
// GET para visualizar todos os produtos

app.get("/produtos/:id", (req, res, next) => { // aqui vai pegar os produtos pelo ID, o produto que eu quiser puxar, tipo BD mesmo
    res.send(bancoDeDados.getProduto(req.params.id))
})
// GET para visualizar por id

// salva o produto
app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // convertendo em JSON
})
// POST para salvar, add mais produtos

// alterar produto
app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // convertendo em JSON
})
// PUT para alterar algum produto

// deletar produto
app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)  
    res.send(produto) // JSON
})
// DELETE para deletar algum produto

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

// TÁ FEITO O CRUD CARAI KKKKKK
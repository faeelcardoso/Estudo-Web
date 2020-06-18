const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// bodyParser serve para que, uma vez que eu submeto os dados do meu form, ele irá fazer um parse no corpo da requisição, do request
// vai pegar esses dados e jogar dentro do request.body, ou seja, quando eu acessar request.body vou conseguir acessar todos os dados que eu submeti
// MUITO IMPORTANTE!!

app.use(bodyParser.urlencoded({ extended: true }))
// urlencoded é o padrão que vem quando vc submete, ou seja, precisa fazer o bodyParser do urlencoded no modo extendido

app.post('/usuarios', (req, res) =>{
    console.log(req.body)
    res.send('<h1>Parabéns! Usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns! Usuário alterado!</h1>')
})

app.listen(3003)
// para executar o servidor = node server.js
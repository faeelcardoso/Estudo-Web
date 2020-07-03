const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //middle para todos os arquivos estáticos da pasta ajax

// Transformando dados em objeto com bodyParser

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 

const multer = require('multer') // importando o multer para interpretar os arquivos em upload

const storage = multer.diskStorage({
    // para evitar sobrescrita de arquivos 
    destination: function (req, file, callback) {
        callback(null, './upload') // todos os meus uploads vão para essa pasta
    }, 
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // os arquivos vão vir nomeados pela dataAtual_NomeOriginal
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro...')
        } 
        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // existe algumas formar diferentes de receber dados do front end
    // req.body
    // req.query ( url fica /parOuImpar?numero=numero) exp /parOuImpar?numero=33
    // req.params ( ulr fica /parOuImpar:numero) exp /parOuImpar:33
    const par = parseInt(req.query.numero) % 2  === 0 // forma mais simples de saber se oo número é par, resto 0 
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))
// caso dê problema de porta, usar o "ps -ax" no terminal, procurar o node e dar um " kill -9 "porta" ". Dps só rodar de novo
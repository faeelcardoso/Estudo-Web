const fs = require("fs")
// fs é um módulo do node

const caminho = __dirname + "/arquivo.json"
// __dirname é o diretório atual

// sincrona... não recomendado pois para o event loop até ler tudo
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})
// uma forma um pouco melhor, passando por callback o erro e o conteudo

// melhor forma de executar 
const config = require("./arquivo.json")
console.log(config.db)

// lendo arquivos do diretório atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})
// Aqui espero retornar as legendas em srt, tudo em linhas
const fs = require('fs') // File System

module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8')) // faço um map lendo os paths e transformando em utf-8
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`) // concatenando tudo em um arq e transformando em um String
                .split('\n') // agr tenho as minhas rows tudo em array
            resolver(rows)
        } catch(e) {
            reject(e)
        }
    })
}
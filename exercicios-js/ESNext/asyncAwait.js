// com promisses
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => { // os dados não vem tudo de uma vez, vão preenchendo pouco a pouco
                resultado += dados
            })
    
            res.on('end', () => { // aqui executa quando termina de preencher
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8 (recente)
// Objetivo de simplificar o uso de promisses...
let obterAlunos = async () => { // para o await tem que marcar a função como async
    const ta = await getTurma('A') // em vez de ficar retornando o then, só faço isso
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome)) // só chamo o then aqui, com o map para mapear e vim só o nome da lista
    .then(nomes => console.log(nomes))
// MUUUUUITO mais tranquilo
// com promisse
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

/*let nomes = []      
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/

// mesmo jeito só que com Promise kkkkkk
// bora melhorar isso 

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
// all posso chamar várias promises pra ela e quando todas forem resolvidas, aí ele vai começar a chamar as cadeias do métodos then
    .then(turmas => [].concat(...turmas))
    // chamo a função then com todos os dados já populados, dentro de uma matriz, cada resultado dentro do seu elemento e depois concatenei tudo num array só
    .then(alunos => alunos.map(aluno => aluno.nome))
    // peguei a lista de todos os alunos e peguei no o nome deles
    .then(nomes => console.log(nomes))
    // finalmente chamei o array de nomes imprimir no console
    .catch(e => console.log(e.message))
    // para tratar algum erro que possa acontecer

// bem mió né não
// Obs: só comentei o lá de cima pra executar mais rápido

// ag um teste de erro
getTurma('D').catch(e => console.log(e.message))
// turma D nem existe, caiu no catch
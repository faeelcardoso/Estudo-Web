module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows) 
                .split(' ')
                .map(word => word.toLowerCase()) // todas as palavras com letra minúscula
                .map(word => word.replace('"', '')) // para tirar qualquer aspas que ter no meio das legendas

            resolver(words)
        } catch(e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim()) // não é um numéro se o inteiro não ter um espaço em branco
    const notEmpty = !!row.trim() // se ter espaço em branco, falso, se não, verdadeiro
    const notInverval = !row.includes('-->') // se não ter essa seta, tá tudo OK
    return notNumber && notEmpty && notInverval // se ficar tudo ok, significa que eu tenho um ValidRow
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '') // remover qualquer tipo de pontuação
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim() // remover qualquer tag na legenda
const mergeRows = (fullText, row) => `${fullText} ${row}` // para juntar todas as linhas, fazendo um merge
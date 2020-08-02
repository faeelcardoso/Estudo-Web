module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            // Quero fazer tipo isso aqui
            // isso: ['ana', 'ana', 'ana', 'bia', 'bia]
            // nisso: { ana: 3, bia: 2 }
            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]) { // se já ter isso
                    obj[word] = obj[word] + 1 // add mais um
                } else { // caso contrário significa que é a primeira vez que estou acessando essa palavra
                    obj[word] = 1
                }
                return obj
            }, {})

            // agr quero fazer tipo isso aq
            // isso: { ana: 3, bia: 2}
            // nisso: [ ana:3, bia: 2 ]

            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key] }))
                .sort((w1, w2) => w2.amount - w1.amount) // assim eu consigo ordenar as palavras que apareceram mais, para as que apareceram menos

            resolver(groupedWordsArray)
        } catch(e) {
            reject(e)
        }
    })
}
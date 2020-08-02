const { ipcMain } = require('electron')
// IPC (Inter Process Comunication) é como eu uso e conecto a web com minha máquina. Com ele consigo mexer com tudo na minha máquina

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows)) // passo os paths e recebo minhas rows
        .then(words => groupWords(words)) // recebo minhas palavras
        .then(groupWords => event.reply('process-subtitles', groupWords)) // tá pronto o sorvetinho
})
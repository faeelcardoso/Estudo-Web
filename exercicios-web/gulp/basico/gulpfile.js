const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes1 !')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes2 !')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // src pego quais arquivos quero trabalhar
    // outra forma é quando você quer pegar todos os arquivos txt de uma pasta
    // " gulp.src('pastaA/**/*.txt') "
    // dessa forma irei pegar somente os arquivos txt contidos na pasta A
        // pipe são as transformações que posso fazer nos arquivos por exemplo
        // .pipe(mudarAsCoresDasImagens())
        .pipe(gulp.dest('pastaB')) // mando os arquivos que selecionei, já modificados para uma pastaB, se ela não estiver criada, ele criará
    return cb() // para notificar o gulp que a tarefa foi concluída
}

const fim = cb => {
    console.log('Fim !')
    return cb()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim) // para exportar o gulp necessita do default 
// executa duas em paralelos e outras duas em série
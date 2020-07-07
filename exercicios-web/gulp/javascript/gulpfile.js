// Tudo o que irei precisar para concatenar as duas pastas e aplicar o Babel(que irá transformar tudo numa versão mais suportada do JS)
const { series } = require('gulp')
const gulp = require('gulp')
const concat =  require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS() { // default = padrão
        return gulp.src('src/**/*.js')
            .pipe(babel({
                comments: false, // não quero que os comentários vão junto
                presets: ['env'] // esse preset serve para transforma tudo no mais moderno atualmente
            }))
            .pipe(uglify()) // pega todo código e irá minificar, irá colocar todo o código e coloca numa linha só sem espaço
            .pipe(concat('codigo.min.js')) // pega tudo, concatena e cria o arquivo minificado e concatenado
            .pipe(gulp.dest('build')) // joga tudo na pasta build, onde irá ficar meus arquivos transformados
            .on('error', err => console.log(err)) // quando determinado evento acontecer irá chamar isso, no caso o erro
}

function fim(cb) {
    console.log('Finalizado!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)
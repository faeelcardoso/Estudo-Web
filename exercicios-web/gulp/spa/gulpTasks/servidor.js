// servidor de desenvolvimento

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch') // serve para monitorar os arquivos, se houver modificação, automaticamente dá um reload na página

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) // sempre que ocorrer alguma mudança no HTML, chamo o gulp do mesmo
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return cb()
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true // para dar reload automático a cada mudança
        }))
}

module.exports = {
    monitorarArquivos, servidor
}

// FODA DEMAAAAAAAAAAAAAAAAIS!
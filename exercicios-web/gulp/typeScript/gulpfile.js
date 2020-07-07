const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject =  ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // não preciso informar o caminho pois no próprio tsProject já tem
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)
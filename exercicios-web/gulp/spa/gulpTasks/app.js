// CSS, HTML e JS da minha aplicação

const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const GulpClient = require('gulp')

function appHTML() {
    return gulp.src('src/**/*.html') // pego todos os html, com a ajuda por traz do Ajax
        .pipe(htmlmin({ collapseWhitespace: true })) // tirar os espaços em branco
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // idenpendente se for IPNG, JPG, GIF irá pegar
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML) // tenho que apontar para função, para não dar problema no servidor, na hr de monitorar os arquivos
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML, appCSS, appJS, appIMG
}
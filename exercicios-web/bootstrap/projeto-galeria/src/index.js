// Esse é o arquivo onde o Webpack irá procurar tudo

// Arquivos SASS
import './scss/index.scss'

// Dependências
// obs: quando eu importo diretamente, o webpack entende que é um arquivo JS, diferente de ali em cima que especifiquei que é um scss

import 'jquery'
import 'bootstrap'

// Meus files JS

import './js/core/includes'
import './js/plugins/cityButtons'
 
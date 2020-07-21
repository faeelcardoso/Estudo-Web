import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300 // para dar o efeito de sumir as imagens

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null
        // ou seja, se o target for exatamente a cidade que eu quero, irei exibir somente a cidade do target. Se não, se city for null vou exibir todas as cidades.
        if (isTarget) {
            $(this).parent().removeClass('d-none') // removo a classe dos parents, pra não bugar e ficar os espaços dela 
            $(this).fadeIn(duration) // se a cidade for = ao target, fadeIn. Ou se nulo, todo mundo que tem a propriedade wm-city irá ser target, então fadeIn.
        } else {

            $(this).fadeOut(duration, () => { // se não for a cidade que eu quero, ou seja todas as outras que não são target, fadeOut.
                $(this).parent().addClass('d-none') // aplico a classe nos parents, para esconder e tirar os espaços
            }) 
        }
    })
}

$.fn.cityButtons = function () {
    // Criando o plugin
    const cities = new Set // com o set eu evito a repetição de alguma imagem
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    // Criando um filtro por cidades
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city) // colocando cor no botão e na cidade certa
        btn.click(e => filterByCity(city)) // chama a função filterByCity
        return btn // retorna o botão para preencher o Array
    })

    // Criando um filtro de todas as cidades, chamando o nulo na função filterByCity
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll) // adiciono esse botão no array de botões  

    // Criando os botões
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns) // adiciono essa div junto com o array de botões

    $(this).html(btnGroup) // Adiciono dentro de cityButtons o btnGroup
    
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons() // aplico o plugin cityButtons no wm-city-buttons

    // só irá chamar o wm-city-buttons se o carregamento da página for bem sucedido
})

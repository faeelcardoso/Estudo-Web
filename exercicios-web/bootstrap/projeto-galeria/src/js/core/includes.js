// Aqui vai ficar todos meus includes "wm-include"

import $ from 'jquery'

const loadHtmlSuccessCallbacks = [] // um array para quando o loadIncludes for bem sucedido, irá executar isso aqui

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback) 
        // ou seja, se a callback não estiver incluida no array loadHtmlSuccessCallbacks, adicione-a para dentro do array
    }
}

function loadIncludes(parent) { // são os pais dos includes
    if(!parent) parent = 'body' // são não ter um parent, vai procurar no body inteiro
    $(parent).find('[wm-include]').each(function(i, e) { // lembrando que "e" é da DOM
        const url = $(e).attr('wm-include') // coloco o (e) junto com $ para eu poder usar o jQuery
        $.ajax({ // Chamada Ajax
            url,
            success(data) { // se for bem sucedido
                $(e).html(data) // pego o resultado obtido e coloco dentro do elemento
                $(e).removeAttr('wm-include') // com isso evita de chamar uma segunda vez, removendo o include

                loadHtmlSuccessCallbacks.forEach(callback => callback(data)) // chamo meu array de funções
                // ou seja, só irá executar o loadIncludes se o carregamento da página for bem sucedido. Carrega a página e depois renderiza tudo
                loadIncludes(e) // chamo o include de novo, para ficar chamando a função até processar todos os includes existentes de forma recursiva
            }
        })
    })
} 

loadIncludes() // passo vazio para ele usar o body como o parent pela primeira vez 
// Protejendo a variável dólar - jQuery
(function ($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({ // valores padrões, caso dê ruim no plugin2.html, irá assumir esses valores
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        // Criando todas as opções da hora
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        // Criando os separadores e as mensagem
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        // Adicionando alguns dos elementos criados
        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)


        // Criando horario alvo e conseguindo hr, min e seg separado
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // pega o padrão do meu temporizador, em grupo de captura
        const horarioAlvo = regex.exec(opcoesFinais.horario) // agr eu capturei o horario alvo com regex

        // Criando o temporizador
        let temporizador = setInterval(() => {
            const agora = new Date() // hr agr
            const alvo = new Date() // horários alvos que consegui com regex e exec
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) { // preciso da diferença para meu temporizador não interfirir com o timezone e me dar a hora certa
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) // com o ISO string pego a hora certa

                // setando so valores
                horaDezena.html(diferenca[1][0]) // 1 é a parte da hora e 0 é a dezena
                horaUnidade.html(diferenca[1][1]) // 1 é a parte da hora e 1 é a unidade
                minutoDezena.html(diferenca[2][0]) // 2 é a parte do minuto e 0 é a dezena
                minutoUnidade.html(diferenca[2][1]) // 2 é a parte do minuto e 1 é a unidade
                segundoDezena.html(diferenca[3][0]) // 3 é a parte do segundo e 0 é a dezena
                segundoUnidade.html(diferenca[3][1]) // 3 é a parte do segundo e 1 é a unidade
            } else {
                clearInterval(temporizador)
            }
        }, 1000) // 1 segundo

        return this // tem que sempre retornar o this, para eu poder encadear mais funções depois
    }
})(jQuery)
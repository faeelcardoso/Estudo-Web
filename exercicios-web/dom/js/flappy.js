function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    // criando os elementos
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda) // se for uma barreira reversa, primeiro aplico corpo. Se for uma barreira normal, primeiro aplico borda
    this.elemento.appendChild(reversa ? borda : corpo) // se for uma barreira reversa, primeiro aplico borda. Se for uma barreira normal, primeiro aplico corpo

    this.setAltura = altura => corpo.style.height = `${altura}px` // função que representa a altura da barreira
}

// Testar a barreira
/*
const b = new Barreira(true)
b.setAltura(300)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
*/

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) // barreira de cima(reversa)
    this.inferior = new Barreira(false) // barreira de baixo(normal)

    this.elemento.appendChild(this.superior.elemento) // inseri a barreira de cima dentro da div
    this.elemento.appendChild(this.inferior.elemento) // inseri a barreira de baixo dentro da div

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    } // Essa função sempre manterá a alturar fixa e irá sortear a altura superior e inferior

    this.getX = () =>  parseInt(this.elemento.style.left.split('px')[0]) // para pegar exatamente qual é a posição exata do X da barreira
    this.setX = x => this.elemento.style.left = `${x}px` // aqui estou setando, alterando o X a partir do X que foi passado
    this.getLargura = () => this.elemento.clientWidth // Enfim, pego a largura do elemento

    this.sortearAbertura()   
    this.setX(x)
}

// Testar barreiras randômicas
/*const b = new ParDeBarreiras(700, 200, 500)
document.querySelector('[wm-flappy]').appendChild(b.elemento)*/
// irá aparecer as barreiras de forma randômica a  cada refresh

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        // Criando as barreiras iniciais
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    
    // Criando a animação
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // Quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) { // se o X saiu da tela e ficou negativo, ou seja, quando a barreira sair do jogo
                par.setX(par.getX() + espaco * this.pares.length) // Com esse cálculo movo a barreira para o início novamente
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]) // qual a posição que o passáro está
    this.setY = y => this.elemento.style.bottom = `${y}px` // setando a posição para ficar sempre fazendoo a animação em cima da altura

    window.onkeydown = e => voando = true // usuário clicar em uma tecla, voando fica true
    window.onkeyup = e => voando = false // usuário soltou a tecla, voando fica false

    // Animação do pássaro
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) // se estiver voando vai somar 8, se estiver caindo vai diminuir 5. Ou seja, ele voa mais rápido do que cai 
        const alturaMaxima = alturaJogo - this.elemento.clientHeight // bloqueio o pássaro a voar até a altura máxima da tela

        if (novoY <= 0) {
            this.setY(0) // trava ele no chão e não passar
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima) // trava no teto para não passar
        } else {
            this.setY(novoY)
        }
    } 
    this.setY(alturaJogo / 2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos // coloco os pontos dentro da propriedade com o InnerHTML
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() // retângulo associado ao elemento A
    const b = elementoB.getBoundingClientRect() // retângulo associado ao elemento B

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false

    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento

            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    // configurar altura, largura ...
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    // criar os elementos
    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    // importar os elementos no game
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    // iniciar o game
    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
                alert("Aperte ENTER para retornar ao jogo")
                const retomarGame = window.location.reload()
                return retomarGame            
            }
        }, 20)
    }
} 

new FlappyBird().start()


// Testar o game 
/*
const barreiras = new Barreiras(700, 1200, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
const passaro = new Passaro(700)

barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
areaDoJogo.appendChild(passaro.elemento)
areaDoJogo.appendChild(new Progresso().elemento)

setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20)
*/
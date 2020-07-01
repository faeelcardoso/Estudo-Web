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

const b = new ParDeBarreiras(700, 200, 500)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
// irá aparecer as barreiras de forma randômica a  cada refresh
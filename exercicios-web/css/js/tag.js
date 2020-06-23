const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() // Aqui eu pego o elemento e aplico LowerCase

    elemento.style.borderColor = colors.get(tagName) // Coloco cor na borda desse elemento

    if (!elemento.classList.contains('noLabel')) { // se o elemento não estiver marcado com noLabel
        const label = document.createElement('label') // vou adicionar dentro desse elemento, o label que criei
        label.style.backgroundColor = colors.get(tagName) // adiciono cor 
        label.innerHTML = tagName // adiciono o elemento
        elemento.insertBefore(label, elemento.childNodes[0]) // vou fazer isso antes do primeiro elemento filho que esteja nessa tag, ou seja,
        // antes de qualquer coisa, vai ter esse label que criei nesses elementos
    }
})
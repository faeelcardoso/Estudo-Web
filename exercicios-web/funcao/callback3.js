// exemplo de callback no browser

document.getElementsByTagName("body")[0].onclick = function (e) {
    console.log("O evento ocorreu!")
}

// a cada click no browser irá retornar no console que o evento ocorreu
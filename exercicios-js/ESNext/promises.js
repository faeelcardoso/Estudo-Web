function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // Promise ou seja promessa. Se ela for resolvida vem o resolve, se der erro vem o reject
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'Que legal!')
    .then(frase => frase.concat('?!?!?!?')) // o then você retorna o resolve
    .then(outraFrase => console.log(outraFrase)) // o bacana do then que você pode encadiar ele
//  .catch(e = console.log(e)) // com o catch você retorna o rejact, ou o erro
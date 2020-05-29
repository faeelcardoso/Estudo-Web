const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\r\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write("Informe sua idade: ")
        process.stdin.on("data", data => {
            const idade = data.toString().replace("\r\n", "")

            process.stdout.write(`Fala ${nome} de ${idade} anos!!\r\n`)
            process.exit()
        })
    })
}
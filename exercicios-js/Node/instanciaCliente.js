const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")() // tem que colocar as () para invocar a função factory
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

// os dois tem o mesmo valor, mesmo só mechendo o contA, o B tem o mesmo valor pois simplismente exportei o obj do node e ele faz cache desse obj
// ou seja, se esse obj já estiver sido criado ele volta sempre a mesma instância

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)

// já nesse caso são novas instâncias criadas a partir de uma factory, ou seja, o contC foi incrementado mas o contD continua com 1, não interferiu nele
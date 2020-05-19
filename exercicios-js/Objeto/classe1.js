class Lancamento {
    constructor(nome = "Genérico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // o ... serve para add um ou mais elementos que você queira passar e no final ele contatena todos os parametros num array
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salário", 5000)
const contaLuz = new Lancamento("Luz", -220)
const contaNet = new Lancamento("Net", -140)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaLuz, contaNet)
console.log(contas.sumario())
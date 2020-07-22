// CLASSES EM REACT!
import React, { Component } from 'react'

export default class Saudacao extends Component {
    // importantíssimo: com props o valor é read only, somente leitura, um valor constante que não pode ser alterado
    // para alterar tenho que mudar o estado, ou "state". Ou seja, em React a verdade absoluta do dado pertence ao State, ao estado
    // QUEM MANDA EM TUDO EM REACT É O STATE

    state = { // valor inicial
        /* tipo: "Fala",
        nome: "Pedro" */
        // Ou posso colocar assim:

        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // obrigatório chamar o super em constructor
        // agr uso o "bind" para obrigar o this obrigatóriamente referenciar o objeto atual
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state // em classe como não chamamos o props direto como nas funções, coloca-se o this para referenciar nesse caso o "tipo e o nome"
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />  
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} /> 
            </div> // com um imput não estou referenciando o this, aí preciso do bind no constructor. Já no outro uso função arrow e já referencio o this.
        )
    }
}

// cabuloso demais!
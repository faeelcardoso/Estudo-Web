import React, { Component } from 'react'
import './Calculator.css'

import Buttom from '../components/Button'
import Display from '../components/Display'

// Estado Inicial
const initialState = { 
    displayValue: '0',
    clearDisplay:  false, // precisa limpar o display now?
    operation: null,
    values: [0, 0],
    current: 0 // current value
}

export default class Calculator extends Component {

    state = { ...initialState }

    // primeiro resolvo o problema do "this" para não precisar fazer arrow function dps
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    addDigit(n) {
        // Somente uma validação: se o número tem um ponto e o display já tem um ponto, retorna.
        if (n === '.' && this.state.displayValue.includes('.')) { 
            return
        }

        // irei limpar o display se o display só ter 1 digito 0, ou quando a variavel clearDisplay estiver true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        // se o clearDisplay for true o valor atual é vazio, se não taca o displayValue lá
        const currentValue = clearDisplay ? '' : this.state.displayValue
        // valor novo
        const displayValue = currentValue + n
        
        this.setState({ displayValue, clearDisplay: false })

        // com esse if, consigo mexer no índice 0 do array values, [0, 1]
        if (n !== '.') {
            const i = this.state.current // peguei o indice do valor que estou alterando
            const newValue = parseFloat(displayValue) // converti para float
            const values = [...this.state.values] // peguei os valores e clonei com spread dentro de um novo array 
            values[i] = newValue // alterei o valor que estou mexendo, pode ser o 0 ou 1

            this.setState ({ values }) // substitui o novo array dentro de state
        }
    }

    setOperation(operation) { 
        // agr começo a fazer, sempre que eu setar uma operação, limpar o display de pular para o índice 1 do array values, [0, 1]
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else { // se caiu aqui no else, significa que já tem uma operação setada
            const finish = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values] // peguei os valores e clonei com spread dentro de um novo array
            try { // se der td certo
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) // mando para dentro de values[0], values0 + a operação atual + values1. Posso fazer isso com Scase tbm.
            } catch { // se der algo errado
                values[0] = this.state.values[0]
            }
            values[1] = 0
            
            this.setState({
                displayValue: values[0],
                operation: finish ? null : operation, // operação terminou? null se não faz outra
                current: finish ? 0 : 1,
                clearDisplay: !finish, 
                values
            })
        }
    }

    render () {
        return (
            <div className="calculator"> 
                <Display value={this.state.displayValue} />
                <Buttom label="AC" click={this.clearMemory} triple />
                <Buttom label="/"  click={this.setOperation} operation />
                <Buttom label="7"  click={this.addDigit} />
                <Buttom label="8"  click={this.addDigit} />
                <Buttom label="9"  click={this.addDigit} />
                <Buttom label="*"  click={this.setOperation} operation />
                <Buttom label="4"  click={this.addDigit} />
                <Buttom label="5"  click={this.addDigit} />
                <Buttom label="6"  click={this.addDigit} />
                <Buttom label="-"  click={this.setOperation} operation />
                <Buttom label="1"  click={this.addDigit} />
                <Buttom label="2"  click={this.addDigit} />
                <Buttom label="3"  click={this.addDigit} />
                <Buttom label="+"  click={this.setOperation} operation />
                <Buttom label="0"  click={this.addDigit} double />
                <Buttom label="."  click={this.addDigit} />
                <Buttom label="="  click={this.setOperation} operation />
            </div>
        )
    }
}
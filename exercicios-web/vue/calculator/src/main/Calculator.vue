<template>
  <div class="calculator">
      <Display :value="displayValue" />
      <Button label="AC" @onClick="clearMemory" triple />
      <Button label="/" @onClick="setOperation" operation />
      <Button label="7" @onClick="addDigit" />
      <Button label="8" @onClick="addDigit" />
      <Button label="9" @onClick="addDigit" />
      <Button label="*" operation @onClick="setOperation" />
      <Button label="4" @onClick="addDigit" />
      <Button label="5" @onClick="addDigit" />
      <Button label="6" @onClick="addDigit" />
      <Button label="-" operation @onClick="setOperation" />
      <Button label="1" @onClick="addDigit" />
      <Button label="2" @onClick="addDigit" />
      <Button label="3" @onClick="addDigit" />
      <Button label="+" operation @onClick="setOperation" />
      <Button label="0" double @onClick="addDigit" />
      <Button label="." @onClick="addDigit" />
      <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    }, 
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data()) // essa função faz o objeto voltar para o seu estado inicial
        },
        setOperation(operation) {
            if (this.current === 0) { // quando o usuário ta mexendo no primeiro número da calculadora, ou seja values["0", 1], é a primeira vez
                this.operation = operation
                this.current = 1 // passou para o segundo numero da calc, ou seja values[0, "1"]
                this.clearDisplay = true // limpou o display
            } else { // caso não seja a primeira vez
                const equals = operation === "=" // equals, quero finalizar a operação
                const currentOperation = this.operation // caso o usuário clique em outra operação diferente de "="

                try {
                    this.values[0] = eval( 
                        `${this.values[0]} ${currentOperation} ${this.values[1]}` // pega o valor [0] + operação atual + valor [1]
                    )
                } catch(e) { // deu ruim?
                    this.$emit('onError', e) // erro nele!
                }

                this.values[1] = 0 // zera o indice 1, para ficar pronto para outra operação

                this.displayValue = this.values[0] // novo valor no display
                this.operation = equals ? null : operation // se for equals é pra terminar, se nao for operação que o usuário quer
                this.current = equals ? 0 : 1 // se o usuário colocou = para terminar, ele vai mexer o indice 0, se foi outra operação no indice 1
                this.clearDisplay = !equals // se for diferente de equals ou seja de "=", ele vai limpar o display
            }
        },
        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) { // se o numero ter "." ou dentro do displayValue já ter "."
                return // simplismente retorna e sai da função
            }
            
            const clearDisplay = this.displayValue === "0" || this.clearDisplay // se o displayValue for 0 e se o clearDisplay estiver como true
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue 
            this.clearDisplay = false
            // Alternativa 1
            this.values[this.current] = displayValue 
            // IMPORTANTE: só para lembrar, quando uso displayValue estou acessando o dessa função addDigit
            // Quando uso this.DisplayValue, estou acessando de outro função fora, que nesse caso é o do "data", aí sim estou mudando os dados do componente

            /* Alternativa 2
            if (n !== ".") { // se o número não for um ponto
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue // coloca o número no valor 0 ou 1 do array values, já em float
            }*/
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>
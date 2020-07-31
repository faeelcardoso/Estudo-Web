<template>
    <div id="app">
      <h1>Problema de Monty Hall</h1>
      <div class="form">
        <div v-if="!started"> <!-- Conteúdo daqui só irá aparecer quando não estiver começado -->
            <label for="portsAmount">Quantas portas? </label>
            <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
        </div>
        <div v-if="!started">
            <label for="giftedPort">Qual é a porta premiada? </label>
            <input type="text" id="giftedPort" size="3" v-model.number="giftedPort">
        </div>
        <button v-if="!started" @click="validarPorta">Iniciar</button>
        <button v-if="started" @click="started = false">Reiniciar</button>
      </div>
      <div class="doors" v-if="started"> <!-- As portas só irão aparecer se já estiver começado -->
        <div v-for="i in portsAmount" :key="i"> <!-- para percorrer todas as portas -->
            <Door :hasGift="i === giftedPort" :number="i" />
        </div>
      </div>
    </div>
</template>

<script>
import Door from './components/Door'
import './App.css'

export default {
  name: 'App',
  components: { Door },
  data: function() {
    return {
      started: false, 
      portsAmount: 3,
      giftedPort: null,
      selectedPort: null
    }
  }, 
  methods: {
    validarPorta() {
      if(!isNaN(this.giftedPort)) {
        this.started = true
      } else {
        alert('Você precisa digitar um número imbecil!')
      }
    },
    portSelected(selectedPort) {
            this.selectedPort = selectedPort
      }
  }
}
</script>
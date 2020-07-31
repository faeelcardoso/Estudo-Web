<template>
    <div class="door-area">
        <div class="door-frame" :class="{ selected: selected && !open }"> <!-- Só vai aplicar a classe selected se selected for true e a porta tbm -->
            <Gift v-if="open && hasGift" /> <!-- Presente só irá aparecer se open = true e hasGift = true -->
        </div>
        <div class="door" :class="{ open }" @click="selected = !selected"> <!-- Quando eu clicar na porta, id selected = true => false, ou o contrário -->
            <div class="number" :class="{ selected }">{{ number }}</div>
            <div class="knob" :class="{ selected }" @click.stop="open = true"></div> <!-- Maçaneta, clicou nela open fica true e para o selected de fora -->
        </div>
    </div>
</template>

<script>
import Gift from './Gift'
import './Door.css'

export default {
    name: 'Door',
    components: { Gift },
    props: { // propriedades permanecem até o final da mesma forma
        number: null,
        hasGift: { type: Boolean } // Tem presente?
    },
    data: function() { // os dados irão mudando e não permanecem da mesma forma
        return {
            open: false, // porta irá iniciar como fechada
            selected: false // e não selecionada
        }
    }
}
</script>
<template>
  <v-main fluid>
      <v-form>
          <v-file-input multiple chips label="Selecione as legendas" 
          append-outer-icon="mdi-send"
          outlined
          v-model="files"
          @click:append-outer="processSubtitles" />
      </v-form>
      <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
      </div>
  </v-main>
</template>

<script>
import { ipcRenderer } from 'electron'
import Pill from './Pill'

export default {
    components: { Pill },

    data: function () {
        return {
            files: [],
            groupedWords: []
        }
    },  
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path) // caminho onde vão estar as legendas
            ipcRenderer.send('process-subtitles', paths) // envia
            ipcRenderer.on('process-subtitles', (event, resp) => { // recebe
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
.pills {
    display: flex;
    flex-wrap: wrap;    
    justify-content: space-between;
}
</style>
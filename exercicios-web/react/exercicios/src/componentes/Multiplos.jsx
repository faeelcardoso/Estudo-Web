// MÚLTIPLOS COMPONENTES, várias e várias formas
import React from 'react'

// Importante: quando eu colo "export default" não preciso de nome, e quando não coloco default é obrigatório o nome. Default = Padrão

const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

// Também posso usar assim, lembrando que muda o jeito de importar também

export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }
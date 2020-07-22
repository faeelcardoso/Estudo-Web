// FUNÇÕES REACT
import React from 'react'

// Posso fazer assim, sem precisar importar o React
/* export default function() {
    return 'Teste1'
}*/

// Posso fazer com JSX, porém tem que importar o React para funcionar
/*export default function() {
    return <h1>Teste2</h1>
}*/

// Posso fazer também com função arrow, lembrando que não coloca return pois ele já é implícito
export default () => <h1>Teste2</h1>
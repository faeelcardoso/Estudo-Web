import React from 'react' // usa para converter JSX para JS
import ReactDOM from 'react-dom' // usa para conseguir mexer na DOM

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// Parece estranho mais não é, isso tudo será convertido para JS puro depois pelo próprio React

// const elemento = <h1>React</h1> // aqui usa o React
// ReactDOM.render(<BomDia nome="Raphael" idade={10} />, document.getElementById('root')) // aqui uso o ReactDOM, pego o render e falo qual nó da DOM que quero colocar o elemento

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Joaquim" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root')) 
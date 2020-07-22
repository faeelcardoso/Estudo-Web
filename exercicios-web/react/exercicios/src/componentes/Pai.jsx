import React from 'react'
import { childrenWithProps } from '../utils/ultis'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>

/* Posso fazer dessa forma 
    <Filho nome="Pedro" sobrenome={props.sobrenome} />  // Posso pegar dessa maneira, troco o nome e o sobrenome já pego do Pai 

    //Como também posso usar o spread, primeiro chamo ele para pegar tudo do pai e lolo depois edito oq eu quero 
    <Filho {...props} />
    <Filho {...props} nome="Carla" />
*/
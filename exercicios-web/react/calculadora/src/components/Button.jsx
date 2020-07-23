import React from 'react'
import './Button.css'

// display funcional
export default props => {
    let classes = 'button ' 
    /* IMPORTANTÍSSIMO: QUANDO EU FOR ADD OUTRAS, AQUI TENHO QUE COLOCAR UM ESPAÇO PARA AS OUTROS NAS ASPAS
       POIS QUANDO FOR CONCATENAR, PRECISA DE ESPAÇO ENTRE ELAS*/

    classes += props.operation ? 'operation' : '' // se existir button.operation aplica, se não, deixa vazio
    classes += props.double ? 'double' : '' // se existir button.double aplica, se não, deixa vazio
    classes +=  props.triple ? 'triple' : '' // se existir button.triple aplica, se não, deixa vazio

    return (    
        <button className={classes} onClick={e => props.click && props.click(props.label)}> 
            {/* Sempre que clicar no botão, ele irá retornar o próprio label, podia ser e.target.innerHTML tbm. 
                Chamei o prosp.click 2 vezes pois só em uma ele não reconheceu como função, então tive que fazer um verificação antes. */}
            {props.label}
        </button>
    )
}
// PARÂMETROS NO REACT! OBS: no caso de componentes funcionais, sempre recebe com "props"
import React, { Fragment }from 'react'

// 1ª forma - Com React.Fragment, quando eu não quiser que envolva em nada
export default props => 
    <Fragment>  
        <h1>Bom dia {props.nome} {props.idade}!</h1>
        <h2>Posso colocar mais coisas aqui sem problema com o React.Fragment</h2>
        <h3>Sem que ele esteja envolvido em outra coisa, como uma "div" por exemplo. Top!</h3>
    </Fragment>  

// Posso também usar React.Fragment, aí eu não preciso importar nada

/* export default props => 
    <React.Fragment>  
        <h1>Bom dia {props.nome} {props.idade}!</h1>
        <h2>Posso colocar mais coisas aqui sem problema com o React.Fragment</h2>
        <h3>Sem que ele esteja envolvido em outra coisa, como uma "div" por exemplo. Top!</h3>
    </React.Fragment>  */

    
// 2ª forma - Com um array, puro JS

/*export default props => [
    <h1>Bom dia {props.nome} {props.idade}!</h1>,
    <h2>Posso colocar mais coisas aqui sem problema com o React.Fragment</h2>,
    <h3>Sem que ele esteja envolvido em outra coisa, como uma "div" por exemplo. Top!</h3>
]*/


// 3ª forma - Mais usada, quando você envolve o conteúdo em algo, por exemplo em uma dia

/* export default props => 
    <div>  
        <h1>Bom dia {props.nome} {props.idade}!</h1>
        <h2>Posso colocar mais coisas aqui sem problema com o React.Fragment</h2>
        <h3>Sem que ele esteja envolvido em outra coisa, como uma "div" por exemplo. Top!</h3>
    </div> */
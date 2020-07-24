import './Header.css'
import React from 'react'

export default props => 
    <header className="header d-none d-sm-flex flex-column"> 
    {/* d-nome = dispositivos pequenos o header irá sumir.
        d-sm-flex = dispositivos medios grandes e extras grandes o display vai ser flex
        flex-collumn = o padrão é row, passei para ser coluna. */}
        
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title} {/* fa = font-awesome */}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
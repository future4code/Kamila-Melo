import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <h4>{ props.texto }</h4>
            <p>{ props.email }</p>
            <p>{ props.endereco }</p>
        </div>
    )
}

export default CardPequeno;
import React from 'react';

class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h3>ETAPA 1: Dados Gerais</h3>
                <p>1. Qual seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>3. Qual seu e-mail?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior incompleto</option>
                </select>
                <br/>
            </div>
        );
    }
}

export default Etapa1;
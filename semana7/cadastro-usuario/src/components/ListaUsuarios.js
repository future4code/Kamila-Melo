import React from 'react'
import styled from 'styled-components'

const UsuariosCad = styled.div`
    text-align:center;
    margin: 0 auto;
`

const Nomes = styled.div`
    float: center;
`

class ListaUsuarios extends React.Component{
    render(){
        return(
            <UsuariosCad>
                <h2>Usuários Cadastrados:</h2>
                <Nomes> 
                    {this.props.listausuarios.map(usuario => {
                        return <div key={usuario.id}>
                            <p >{usuario.name} <button onClick={()=>this.props.onClickDeletar(usuario.id)}>Deletar</button></p>
                        </div>
                    })}
                    
                </Nomes>
            </UsuariosCad>
        )
    }
}

export default ListaUsuarios
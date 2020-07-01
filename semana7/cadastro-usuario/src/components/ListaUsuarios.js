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
        let listaFiltrada = this.props.listausuarios;
        if(this.props.filtro !== ""){
            listaFiltrada = listaFiltrada.filter((usuario) => {
              if(usuario.name === this.props.filtro){
                return true
              } else {
                return false
              }
            })
          }
        const novaListaDeUsuarios = listaFiltrada.map((usuario)=>{
            return (
                <div key={usuario.id}>
                <p >{usuario.name} <button onClick={()=>this.props.onClickDeletar(usuario.id)}>Deletar</button></p>
            </div>
            )
        });

        return(
            <UsuariosCad>
                <input type = "text" value={this.props.filtro} onChange={this.props.onChangeFilter}/>
                <h2>Usuários Cadastrados:</h2>
                <Nomes> 
                    {novaListaDeUsuarios}
                </Nomes>
            </UsuariosCad>
        )
    }
}

export default ListaUsuarios
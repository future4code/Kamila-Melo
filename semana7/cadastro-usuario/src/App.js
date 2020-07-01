import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';
import styled from 'styled-components'
import axios from "axios";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
`

const BotaoPagina = styled.button`
  margin-top: 16px;
  margin-left: 16px;
  height: 20px;
`

class App extends React.Component{
  state = {
    usuarios: [],
    nomeValue:"",
    emailValue: "",
    lista: false
  }

  componentDidMount = () => {
    this.verListaUsuarios();
  };

  verListaUsuarios = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{Authorization:"kamila-melo-turing"}
  }).then (response => {
    this.setState({usuarios: response.data});
  }).catch(error => {
    console.log(error.data)
  })
  }

  criarUsuarios = () => {
    const body = {
      name: this.state.nomeValue,
      email: this.state.emailValue,
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{headers:{
      Authorization: "kamila-melo-turing"
    }}).then(response=>{
      this.verListaUsuarios();
      this.setState({nomeValue:"", emailValue:""});
    }).catch(error=>{
      console.log(error.data)
    })
  }

  removeNome = (userId) => {
    
    if(window.confirm("Deseja realmente excluir o usuário?") === true){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{headers:{Authorization:"kamila-melo-turing"}
    }).then(response => {
      this.verListaUsuarios();
      alert("Usuário deletado com sucesso!")
    }).catch(error=>{
      console.log(error.data)
      alert("Erro ao deletar usuário.")
    })
    }
    }
  

  onChangeNomeValue = event =>{
    this.setState({nomeValue: event.target.value})
  }

  onChangeEmailValue = event =>{
    this.setState({emailValue: event.target.value})
  }

  renderizaListaDeUsuarios = ()=>{
    this.setState({lista: !this.state.lista});
  }

  render(){
    
    if(this.state.lista === false){
      return (
        <AppContainer>
          <BotaoPagina onClick={this.renderizaListaDeUsuarios}>Ir para página de lista</BotaoPagina>
          <Cadastro 
              nomeValue={this.state.nomeValue}
              emailValue = {this.state.emailValue}
              onChangeEmailValue = {this.onChangeEmailValue}
              onChangeNomeValue = {this.onChangeNomeValue}
              onClickSalvar = {this.criarUsuarios}
            />
        </AppContainer>
      );
    }
    return(
      <AppContainer>
        <BotaoPagina onClick={this.renderizaListaDeUsuarios}>Ir para página de registro</BotaoPagina>
        <ListaUsuarios 
              listausuarios={this.state.usuarios}
              onClickDeletar = {this.removeNome}
          />
      </AppContainer>

    )
    
  }
  
}

export default App;
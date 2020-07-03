import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist'
import VisualizarPlaylist from './components/VisualizarPlaylist'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: black;
  height: calc(100vh - 25px);
`

const Cabecalho = styled.header`
  background-color:green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
`

const Botao = styled.button`
  border:1px solid #25692A;
  border-radius:4px;
  display:inline-block;
  cursor:pointer;
  font-family:Verdana;
  font-weight:bold;
  font-size:13px;
  padding:6px 10px;
  text-decoration:none;
  border-color:#68b465;
  background:linear-gradient(to bottom, #abd5aa 5%, #68b465  100%);
  box-shadow:inset 0px 1px 0px 0px #e3f1e3;
  color:#fff;
  text-shadow:0px 1px 0px #528009;

  &:hover{
    background:linear-gradient(to bottom, #68b465 5%, #abd5aa 100%);
  }
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
`

const Menu = styled.nav`
  display: flex;
  justify-content: baseline;
`

const Logo = styled.div`
  display: flex;
  justify-content: baseline;
`

const DivMenu = styled.div`
  display: flex;
  justify-content: baseline;
`

const Link = styled.p`
  margin-right: 64px;
  color: white;
  cursor: pointer;
`

class App extends React.Component {
  state= {
    novaPlaylist: true,
    visualizaPlaylist: false,
    adicionaMusica: false
  }

  pagNovaPlaylist = () => {
    if(this.state.novaPlaylist === false){
      this.setState({visualizaPlaylist: false})
      this.setState({novaPlaylist: true})
      this.setState({adicionaMusica: false})
    }
    // else{
    //   this.setState({novaPlaylist: true})
    // }
  }

  pagVisualizaPlaylist = () => {
    if(this.state.visualizaPlaylist === false){
      this.setState({visualizaPlaylist: true})
      this.setState({novaPlaylist: false})
      this.setState({adicionaMusica: false})
    }
    // else{
    //   this.setState({visualizaPlaylist: true})
    // }
  }

  pagAdicionaMusica = () => {
    if(this.state.adicionaMusica === false){
      this.setState({visualizaPlaylist: false})
      this.setState({novaPlaylist: false})
      this.setState({adicionaMusica: true})
    }
    // else{
    //   this.setState({adicionaMusica: true})
    // }
  }


  render(){
    console.log(this.state.novaPlaylist)
    console.log(this.state.visualizaPlaylist)
    console.log(this.state.adicionaMusica)
    if(this.state.novaPlaylist === true){
      return (
        <Container>
          <Cabecalho>
            <Logo>
              <Title>Labefy</Title>
            </Logo>
            <DivMenu>
              <Menu>
                <Link onClick={this.pagNovaPlaylist}>Nova Playlist</Link>
                <Link onClick={this.pagVisualizaPlaylist}>Visualizar Playlist</Link>
                <Link onClick={this.pagAdicionaMusica}>Adicionar Músicas</Link>
              </Menu>
            </DivMenu>
  
          </Cabecalho>
          <CriarPlaylist />
        </Container>
      )
    }
    if(this.state.visualizaPlaylist === true){
      return (
        <Container>
          <Cabecalho>
            <Logo>
              <Title>Labefy</Title>
            </Logo>
            <DivMenu>
              <Menu>
                <Link onClick={this.pagNovaPlaylist}>Nova Playlist</Link>
                <Link onClick={this.pagVisualizaPlaylist}>Visualizar Playlist</Link>
                <Link onClick={this.pagAdicionaMusica}>Adicionar Músicas</Link>
              </Menu>
            </DivMenu>
  
          </Cabecalho>
  
          <VisualizarPlaylist />
  
        </Container>
      )
    }
    return (
      <Container>
        <Cabecalho>
          <Logo>
            <Title>Labefy</Title>
          </Logo>
          <DivMenu>
            <Menu>
              <Link onClick={this.pagNovaPlaylist}>Nova Playlist</Link>
              <Link onClick={this.pagVisualizaPlaylist}>Visualizar Playlist</Link>
              <Link onClick={this.pagAdicionaMusica}>Adicionar Músicas</Link>
            </Menu>
          </DivMenu>

        </Cabecalho>

      </Container>
    );
  }
  
}

export default App;

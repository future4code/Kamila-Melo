import React from 'react'
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
  }

  pagNovaPlaylist = () => {
    if(this.state.novaPlaylist === false){
      this.setState({visualizaPlaylist: false})
      this.setState({novaPlaylist: true})
    }
  }

  pagVisualizaPlaylist = () => {
    if(this.state.visualizaPlaylist === false){
      this.setState({visualizaPlaylist: true})
      this.setState({novaPlaylist: false})
    }
  }

  render(){
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
            </Menu>
          </DivMenu>

        </Cabecalho>

      </Container>
    );
  }

}

export default App;

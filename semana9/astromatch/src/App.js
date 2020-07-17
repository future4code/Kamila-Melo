import React, {useState} from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import PhotoUser from './components/PhotoUser'
import Matches from './components/Matches'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 65vh;
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 150px;
  background-color: white;
  box-shadow: 0 1em 10em -1em blue;
`

function App() {

  const [pagMatch, setPagMatch] = useState(false)

  const onClickRender = () => {
    setPagMatch(!pagMatch)
  }

  const renderizaMatches = () => {
    switch(pagMatch){
      case false:
        return <AppContainer>
          <Header onClickRender = {onClickRender}/>
          <PhotoUser/>
        </AppContainer>
      case true:
        return <AppContainer>
          <Header pagMatch={pagMatch} onClickRender = {onClickRender}/>
          <hr/>
          <Matches/>
      </AppContainer>
      default:
        return <p>ERRO</p>
    }
  }
  
  return <div>
    {renderizaMatches()}
  </div>

}

export default App;
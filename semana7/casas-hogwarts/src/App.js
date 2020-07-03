import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Container = styled.div`
  font-family:sans-serif;
  text-align: center;
`

class App extends React.Component {
  state = {
    casashogwarts: [],
  };

  componentDidMount = () => {
    this.geraCasa();
  }

  geraCasa= () => {
    axios.get('https://www.potterapi.com/v1/sortingHat').then(response => {
      this.setState({casashogwarts:response.data})
      console.log(response.data);
    }).catch(error => {
      console.log(error.message)
    })
  }
  
  render(){
    return (
      <Container>
        <h1>Clique no botão e verifique qual será sua Casa de Hogwarts:</h1>
        <button onClick = {this.geraCasa}>Buscar</button>
        <p>{this.state.casashogwarts}</p>
        {this.mostraCaracteristica}
      </Container>
    );
  }
  
}

export default App;

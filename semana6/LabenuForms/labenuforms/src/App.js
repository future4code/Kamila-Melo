import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Fimform from './components/Fimform'

class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Fimform/>;
      default:
        return ""
    }
  }

  onClickProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa + 1})
  }

  

  render(){
    return (
      <div className="App">
          {this.renderizaEtapa()}
          {this.state.etapa !== 4 ? <button onClick = {this.onClickProximaEtapa}>Próxima etapa</button> : ""}
          
      </div>
    );
  }
}

export default App;

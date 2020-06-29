import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {id: Date.now, texto: "Aprender CSS", completa: false},
        {id: Date.now, texto: "Aprender HTML", completa: true},
      ],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const novaTarefa = {
      nome: this.state.nome,
      email: this.state.email,
      idade: this.state.idade
    };

    localStorage.setItem("novaTarefa", JSON.stringify(novaTarefa));
  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("novaTarefa");

    const tarefasObjeto = JSON.parse(tarefasString);
    console.log(tarefasObjeto);
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    
    this.setState({tarefas: [... this.state.tarefas,novaTarefa], inputValue:""})
  }

  selectTarefa = (id) => {
    const novaTarefas = this.state.tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return {...tarefa, completa: !tarefa.completa}
      }
      return tarefa
    })

    this.setState({ tarefas: novaTarefas});
  };


  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

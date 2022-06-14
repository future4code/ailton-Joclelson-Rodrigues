import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul `
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`
const Tarefa = styled.li `
  text-align: center;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-weight: bold;
`
const InputsContainer = styled.div `
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  align-items: center;
`
const Imput = styled.input `
  padding: 8px 8px;
  border-radius: 10px;
  border: 1px solid black;
  width: 16em;
`
const Botao = styled.button `
  padding: 8px 8px;
  border-radius: 8px;
  background-color: dodgerblue;
  color: white;
  border: none;
`
const BotaoTarefa = styled.button `
  padding: 4px 8px;
  border-radius: 8px;
  background-color: dodgerblue;
  color: white;
  border: none;
  margin: 0 3px;
`
const Select = styled.select `
  padding: 6px 8px;
  border-radius: 8px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: 1,
          texto: 'Tomar café',
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const usuarios = localStorage.getItem("tarefas")
    if(usuarios) {
      const tarefa = localStorage.getItem("tarefas")
      const tarefasConvertidas = JSON.parse(tarefa)
      this.setState({tarefas: tarefasConvertidas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novasTarefas = [...this.state.tarefas]
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    novasTarefas.push(novaTarefa)
    this.setState({tarefas: novasTarefas})
    this.setState({inputValue: ''})
  }

  removerTarefa = (id) => {
    const novasTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({tarefas: novasTarefas})
  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {...tarefa, completa: !tarefa.completa}
        return novaTarefa
      }else {
        return tarefa
      }
    })
    this.setState({tarefas: novasTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
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
          <Imput value={this.state.inputValue} onChange={this.onChangeInput}/>
          <Botao onClick={this.criaTarefa}>Adicionar</Botao>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <Select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </Select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa key={tarefa.id}
                completa={tarefa.completa}
                
              >
                {tarefa.texto}
                <div>
                <BotaoTarefa onClick={() => this.selectTarefa(tarefa.id)}>Marcar</BotaoTarefa>
                <BotaoTarefa onClick={() => this.removerTarefa(tarefa.id)}>x</BotaoTarefa>

                </div>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

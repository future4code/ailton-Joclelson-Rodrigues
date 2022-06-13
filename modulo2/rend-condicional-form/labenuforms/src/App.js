import React, { Component } from 'react'
import "./App.css";
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from  './components/Etapa2';
import Etapa3 from  './components/Etapa3';
import Etapa4 from  './components/Final';

const Botao = styled.button `
  padding: 10px 10px;
  width: 12em;
  border-radius: 10px;
  :hover {
    box-shadow: 0 0 2em #EBE3DA;
  }
`

class App extends Component {
  state = {
    etapa: 1
  }

  irParaProximaEtapa = () => {
    console.log(this.state.etapa)
    this.setState({etapa: this.state.etapa + 1})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
      break;
      case 2:
        return <Etapa2 />
      break;
      case 3:
        return <Etapa3 />
      break;
      case 4:
        return <Etapa4 />
      break;
    }
  }

  render() {
      return (
        <div className='pai'>
          {this.renderizaEtapa()}
          {this.state.etapa === 4 || <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao> }
        </div>
      );
  }

}

export default App;
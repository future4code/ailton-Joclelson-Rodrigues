import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const ImputUsuario = styled.input `
  border: none;
  padding: 8px 6px;
  width: 17%;
  border-radius: 8px;
  margin: 0 4px;
`
const ImputMensagem = styled.input `
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 0 4px 0 0;
  width: 64%;
`
const Botao = styled.button `
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  width: 15%;
  margin: 0 4px;
  :hover {
    background-color: #007F68;
    cursor: pointer;
    color: #fff
  }
`
const Containermsg = styled.div `
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* height: fit-content; */
  max-width: 100%;
  border-radius: 12px;
  margin: 10px;
  padding: 12px;
  background-color: #E6FEDA;
  p{word-break: break-all;}
`

class App extends Component {
  state = {
    mensagens: [],
    inputUsuario: '',
    inputMensagem: ''
  }

  onChangeUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }
  onChangeMensagem = (event) => {
    this.setState({inputMensagem: event.target.value})
  }

  enviarMensagem = () => {
    if(this.state.inputUsuario === "" || this.state.inputMensagem === ""){
      alert("Insira uma mensagem")
    }else {
      const novaMensagem = [...this.state.mensagens, {
        Usuario: this.state.inputUsuario,
        Mensagem: this.state.inputMensagem
      }]
      this.setState({mensagens: novaMensagem})
      /* this.setState({inputUsuario: ''}) */
      this.setState({inputMensagem: ''})
    }
  }

  apagarMensagem = (id) => {
    if(window.confirm('Deseja realmente apagar a mensagem ?')){
      const apagados = this.state.mensagens.filter((msg, index) => {
        return id !== index
      })
      this.setState({ mensagens: apagados})
    }
  }

  enviarMensagemEnter = (event) => {
    if(event.key === 'Enter'){
      if(this.state.inputUsuario === "" || this.state.inputMensagem === ""){
        alert("Insira uma mensagem")
      }else {
        const novaMensagem = [...this.state.mensagens, {
          Usuario: this.state.inputUsuario,
          Mensagem: this.state.inputMensagem
        }]
        this.setState({mensagens: novaMensagem})
        /* this.setState({inputUsuario: ''}) */
        this.setState({inputMensagem: ''})
      }
    }
    }

  render() {
    const monstraMensagem = this.state.mensagens.map((msg, index) => {
      return (
        <Containermsg onDoubleClick={() => this.apagarMensagem(index)} key={index}>
          <h4>{msg.Usuario}</h4>
          <p>{msg.Mensagem}</p>
        </Containermsg>
      )
    })

    return (
      <div className='pai'>
        <header className='header'>
          <h2>Whatslab</h2>
        </header>

        <main>
          { monstraMensagem }
        </main>

        <footer>
          <ImputUsuario
          value={this.state.inputUsuario}
          placeholder='Usuário'
          onChange={this.onChangeUsuario}
          />
          <ImputMensagem
          value={this.state.inputMensagem}
          placeholder='Mensagem'
          onKeyPress={this.enviarMensagemEnter}
          onChange={this.onChangeMensagem}
          />
          <Botao onClick={this.enviarMensagem}>Enviar</Botao>
        </footer>
      </div>
    )
  }
}
export default App
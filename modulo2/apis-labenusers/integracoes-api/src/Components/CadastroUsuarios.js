import React, { Component } from 'react'
import styled from 'styled-components';

class CadastroUsuarios extends Component {

  render() {
    return (
      <Container>
          <h3>Cadastro de Usuários</h3>

          <Inputs 
          onChange={this.props.onChangeInputNome}
          value={this.props.inputNome}
          placeholder="Insira o nome"
          /> 

          <Inputs 
          onChange={this.props.onChangeInputEmail}
          value={this.props.inputEmail}
          placeholder="Insira o email"
          />
          <Botao onClick={this.props.cadastrarUsuario}>Cadastrar</Botao>
      </Container>
    )
  }
}

export default CadastroUsuarios;

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
`;

const Inputs = styled.input `
  padding: 8px;
  width: 16%;
  border-radius: 6px;
  border: 2px solid deepskyblue;
  outline: none;
`;

const Botao = styled.button `
  padding: 10px;
  width: 10%;
  background-color: deepskyblue;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  :hover{
    box-shadow: 0 0 4px dodgerblue;
  }
`;
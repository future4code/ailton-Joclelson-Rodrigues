import React from 'react'
import styled from 'styled-components';
import EditarUsuario from './EditarUsuario';

class DetalhesUsuario extends React.Component {
  state = {
    editarUsuario: false
  }

  editarUsuarios = () => {
    this.setState({editarUsuario: true})
  }

  render() {
    return (
      <ContainerDetalhes>
        <h4>Detalhes</h4>
        {this.props.detalheUsuario}
        <Botao onClick={this.editarUsuarios}>Editar</Botao>
        { this.state.editarUsuario && <EditarUsuario usuarios={this.props.usuarios} />}
        <Botao onClick={this.props.ocultarDetalhes}>Fechar</Botao>
      </ContainerDetalhes>
    )
  }
}

export default DetalhesUsuario;

const ContainerDetalhes = styled.div `
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Botao = styled.button`
  padding: 4px;
  width: 30%;
  background-color: deepskyblue;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  :hover {
    box-shadow: 0 0 4px dodgerblue;
  }
`;
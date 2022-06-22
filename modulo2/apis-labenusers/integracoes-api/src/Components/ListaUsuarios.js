import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class ListaUsuarios extends Component {
  state = {
    usuarios: [],
  };

  pegarUsuarios = axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      }
    )
    .then((response) => {
      this.setState({ usuarios: response.data });
    })
    .catch((error) => {
      console.log(error);
    });

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Separar>
          {usuario.name} <Botao>Excluir</Botao>
        </Separar>
      );
    });
    console.log(" usuarios", listaDeUsuarios);
    return (
      <Container>
        <h3>Lista de Usuários</h3>
        {listaDeUsuarios}
      </Container>
    );
  }
}

export default ListaUsuarios;


const Container = styled.div `
  width: 25%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Separar = styled.p `
  display: flex;
  justify-content: space-between;
`;

const Botao = styled.button `
  padding: 4px;
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
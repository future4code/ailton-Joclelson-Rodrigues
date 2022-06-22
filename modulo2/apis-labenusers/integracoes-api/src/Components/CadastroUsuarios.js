import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class CadastroUsuarios extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  onChangeInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  onChangeInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  cadastrarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "joclelson-rodrigues-ailton",
          },
        }
      )
      .then((response) => {
        alert("Cadastrado com Sucesso");
      })
      .catch((error) => {
        alert("Erro ao Cadastrar");
      });

    this.setState({ inputNome: "", inputEmail: "" });
  };

  render() {
    return (
      <Container>
        <h3>Cadastro de Usuários</h3>

        <Inputs
          onChange={this.onChangeInputNome}
          value={this.state.inputNome}
          placeholder="Insira o nome"
        />

        <Inputs
          onChange={this.onChangeInputEmail}
          value={this.state.inputEmail}
          placeholder="Insira o email"
        />
        <Botao onClick={this.cadastrarUsuario}>Cadastrar</Botao>
      </Container>
    );
  }
}

export default CadastroUsuarios;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
`;

const Inputs = styled.input`
  padding: 8px;
  width: 16%;
  border-radius: 6px;
  border: 2px solid deepskyblue;
  outline: none;
`;

const Botao = styled.button`
  padding: 10px;
  width: 10%;
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

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhesUsuario from "./DetalhesUsuario";

class ListaUsuarios extends Component {
  state = {
    usuarios: [],
    informacoes: [],
    detalhesUsuario: false,
    inputBusca: ''
  };

  exibirDetalhes = async (usuario) => {
    this.setState({ detalhesUsuario: true });
    try {
      const resultado = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        {
          headers: {
            Authorization: "joclelson-rodrigues-ailton",
          },
        }
      );

      this.setState({ informacoes: resultado.data });
    } catch (error) {
      alert("Erro, tente novamente!");
    }
  };

  ocultarDetalhes = () => {
    this.setState({ detalhesUsuario: false });
  };

  onChangeInputBusca = (e) => {
    this.setState({inputBusca: e.target.value})
  }

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = async () => {
    try {
      const resultado = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "joclelson-rodrigues-ailton",
          },
        }
      );

      this.setState({ usuarios: resultado.data });
    } catch (error) {
      alert("Ocorreu um problema, tente novamente");
    }
  };

  deletarUsuario = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?") === true) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "joclelson-rodrigues-ailton",
            },
          }
        )
        .then((response) => {
          const novoUsuario = this.state.usuarios.filter((usuario) => {
            return usuario.id !== id;
          });
          this.setState({ usuarios: novoUsuario });
          alert("Usuario Excluido");
        })
        .catch((error) => {
          alert("Não foi posivel deletar usuario");
        });
    }
  };

  buscarUsuario = () => {
   /*  try{
      const body = {
        name: this.state.inputBusca
      }
      const resultado = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=", body , {
        headers: {
          Authorization: 'joclelson-rodrigues-ailton'
        }
      })

      console.log(resultado)

    }catch (error) {
      alert("Erro")
    }  */
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Separar key={usuario.id} onClick={() => this.exibirDetalhes(usuario)}>
          {usuario.name}{" "}
          <BotaoExcluir onClick={() => this.deletarUsuario(usuario.id)}>
            Excluir
          </BotaoExcluir>
        </Separar>
      );
    });
    const detalheUsuario = [this.state.informacoes].map((usuario) => {
      return (
        <div key={usuario.id}>
          <p>{usuario.name}</p>
          <p>{usuario.email}</p>
          <BotaoExcluir onClick={() => this.deletarUsuario(usuario.id)}>
            Excluir
          </BotaoExcluir>
        </div>
      );
    });
    return (
      <Container>
        <h3>Lista de Usuários</h3>
        <div>
          <input 
          onChange={this.onChangeInputBusca}
          value={this.state.inputBusca} />
          <button onClick={this.buscarUsuario}>Procurar</button>
        </div>
        {listaDeUsuarios}
        {this.state.detalhesUsuario && (
          <DetalhesUsuario
            usuarios={this.state.informacoes}
            detalheUsuario={detalheUsuario}
            ocultarDetalhes={this.ocultarDetalhes}
          />
        )}
      </Container>
    );
  }
}

export default ListaUsuarios;

const Container = styled.div`
  width: 25%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Separar = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border-radius: 6px;
  :hover {
    background-color: lightgray;
  }
`;

const Botao = styled.button`
  padding: 4px;
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

const BotaoExcluir = styled.button`
  padding: 4px;
  margin-top: 8px;
  background-color: #ff7396;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  :hover {
    box-shadow: 0 0 4px #f87474;
  }
`;

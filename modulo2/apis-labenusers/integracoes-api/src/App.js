import React from "react";
import CadastroUsuarios from "./Components/CadastroUsuarios";
import ListaUsuarios from "./Components/ListaUsuarios";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    telas: "cadastrarUsuario",
  };

  onChangeInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  onChangeInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  listaUsuario = () => {
    this.setState({ telas: "listasUsuarios" });
  };

  cadUsuario = () => {
    this.setState({ telas: "cadastrarUsuario" });
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

    this.setState({ inputNome: "" });
    this.setState({ inputEmail: "" });
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <a href="#" onClick={this.cadUsuario}>
              Cadastro de Usuários
            </a>
            <a href="#" onClick={this.listaUsuario}>
              Lista de Usuários
            </a>
          </nav>
        </header>
        {this.state.telas === "cadastrarUsuario" ? (
          <CadastroUsuarios
            cadastrarUsuario={this.cadastrarUsuario}
            listaUsuario={this.listaUsuario}
            inputNome={this.state.inputNome}
            inputEmail={this.state.inputEmail}
            onChangeInputNome={this.onChangeInputNome}
            onChangeInputEmail={this.onChangeInputEmail}
          />
        ) : (
          <ListaUsuarios />
        )}
      </div>
    );
  }
}

export default App;

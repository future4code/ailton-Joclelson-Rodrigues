import React from "react";
import CadastroUsuarios from "./Components/CadastroUsuarios";
import ListaUsuarios from "./Components/ListaUsuarios";
import "./App.css";

class App extends React.Component {
  state = {
    telas: "cadastrarUsuario"
  };

  listaUsuario = () => {
    this.setState({ telas: "listasUsuarios" });
  };

  cadUsuario = () => {
    this.setState({ telas: "cadastrarUsuario" });
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
          <CadastroUsuarios listaUsuario={this.listaUsuario} />
        ) : (
          <ListaUsuarios />
        )}
      </div>
    );
  }
}

export default App;

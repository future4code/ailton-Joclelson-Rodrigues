import axios from "axios";
import React, { Component } from "react";

export default class EditarUsuario extends Component {
  state = {
    editaNome: "",
    editarEmail: "",
  };

  onChangeEditarNome = (e) => {
    this.setState({ editaNome: e.target.value });
  };

  onChangeEditarEmail = (e) => {
    this.setState({ editarEmail: e.target.value });
  };

  render() {
    return (
      <div>
        <h4>Editar</h4>
        <input onChange={this.onChangeEditarNome} placeholder="Nome" />
        <input onChange={this.onChangeEditarEmail} placeholder="Email" />
        <button>Salvar</button>
      </div>
    );
  }
}

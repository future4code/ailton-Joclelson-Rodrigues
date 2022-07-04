import React, { Component } from "react";
import iconeLixeira from "../assets/img/lixo-icon.png";
import styled from "styled-components";

export default class BotaoExcluir extends Component {
  render() {
    return (
      <Botao>
        <IconeLixo src={iconeLixeira} alt="icone lixeira" />
      </Botao>
    );
  }
}

const Botao = styled.button`
  height: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconeLixo = styled.img`
  width: 15px;
`;

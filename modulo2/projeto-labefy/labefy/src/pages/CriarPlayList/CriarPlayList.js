import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { urlCriaPlayList, urlPegarPlayList } from "../../constants/urls";
import musicIcone from "../../assets/img/music-icon.png";

export default class CriarPlayList extends Component {
  state = {
    inputCriar: "",
    playLists: [],
  };

  componentDidMount() {
    this.pegarPlayList();
  }

  manipularInput = (e) => {
    this.setState({ inputCriar: e.target.value });
  };

  criarPlayList = () => {
    const body = {
      name: this.state.inputCriar,
    };
    axios
      .post(urlCriaPlayList, body, {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      })
      .then((res) => {
        alert("Cadastrado com sucesso!");
        this.pegarPlayList();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  pegarPlayList = () => {
    axios
      .get(urlPegarPlayList, {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      })
      .then((res) => {
        this.setState({ playLists: res.data.result.list });
      })
      .catch((err) => {
        alert(err);
      });
  };

  exclurPlayList = (id) => {
    if (window.confirm("Quer realmente excluir ?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

      axios
        .delete(url, {
          headers: {
            Authorization: "joclelson-rodrigues-ailton",
          },
        })
        .then((res) => {
          alert("Play List deletada com sucesso!");
          this.pegarPlayList();
        })
        .catch((err) => {
          alert("Ocorreu um erro, tente novamente");
        });
    }
  };

  render() {
    const playList = this.state.playLists.map((list) => {
      return (
        <ContainerPlayList key={list.id}>
          <PlayList
            onClick={() => this.props.irDetalhes(list.id)}
            key={list.id}
          >
            {list.name}
          </PlayList>
          <BotaoExcluir onClick={() => this.exclurPlayList(list.id)}>
            x
          </BotaoExcluir>
        </ContainerPlayList>
      );
    });
    return (
      <BodyTodo>
        <ContainerHeader>
          <Logo src={musicIcone} />
          <TextLogo>Player Music</TextLogo>
        </ContainerHeader>
        <ContainerMain>
          <Input
            onChange={this.manipularInput}
            value={this.state.inputCriar}
            placeholder="Criar Play List"
          />
          <BotaoCriar onClick={this.criarPlayList}>Criar</BotaoCriar>
        </ContainerMain>
        <TodasPlayList>{playList}</TodasPlayList>
      </BodyTodo>
    );
  }
}

const BodyTodo = styled.div`
  background-color: #64c896;
  height: 100vh;
`;
const ContainerHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
`;
const Logo = styled.img`
  width: 50px;
`;

const TextLogo = styled.h1`
  color: #64c896;
`;

const ContainerMain = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #64c896;
`;

const Input = styled.input`
  margin: 12px;
  width: 20%;
  border-radius: 6px;
  border: 2px solid #00caf4;
  outline: none;
`;

const BotaoCriar = styled.button`
  width: 15%;
  border: none;
  background-color: #00caf4;
  border-radius: 6px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  :hover {
    box-shadow: 0 0 5px #fff;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const TodasPlayList = styled.div`
  display: flex;
  justify-content: center;
  background-color: #64c896;
  flex-wrap: wrap;
`;

const ContainerPlayList = styled.div`
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 150px;
  margin: 10px;
  :hover {
    box-shadow: 0 0 6px #fff;
    transition: all 0.3s;
    cursor: pointer;
  }
`;

const PlayList = styled.div`
  display: inline;
  height: 80%;
  width: 92%;
  text-align: center;
  padding: 4px;
  color: #fff;
`;

const BotaoExcluir = styled.button`
  background-color: #ff5c5c;
  color: white;
  width: 98%;
  border-radius: 6px;
  border: none;
  :hover {
    box-shadow: 0 0 5px #ff5c5c;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

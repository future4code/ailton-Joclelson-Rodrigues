import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { urlCriaPlayList, urlPegarPlayList } from "../../constants/urls";
import musicIcone from '../../assets/img/music-icon.png'

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
        this.pegarPlayList()
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
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "joclelson-rodrigues-ailton"
            }
        })
            .then((res) => {
                alert("Play List deletada com sucesso!")
                this.pegarPlayList()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
  }

  render() {
    const playList = this.state.playLists.map((list) => {
      return (
        <ContainerPlayList key={list.id}>
          <PlayList onClick={() => this.props.irDetalhes(list.id)} key={list.id}>
            {list.name}
          </PlayList>
          <BotaoExcluir onClick={() => this.exclurPlayList(list.id)}>x</BotaoExcluir>
        </ContainerPlayList>
      );
    });
    return (
      <div>
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
        <div>
          {playList}
        </div>
      </ContainerMain>
      </div>
      
    );
  }
}

const ContainerHeader = styled.header `
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
`;
const Logo = styled.img `
  width: 50px;
`;

const TextLogo = styled.h1 `
  color: #00CAF4;
`;

const ContainerMain = styled.div `
  width: 300px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input `
  margin: 12px;
  border-radius: 6px;
  border: 2px solid #00CAF4;
  outline: none;
`;

const BotaoCriar = styled.button `
  width: 30%;
  border: none;
  background-color: #00CAF4;
  border-radius: 6px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  :hover {
    box-shadow: 0 0 5px #00CAF4;
    cursor: pointer;
  }
`;

const ContainerPlayList = styled.div `
  display: flex;
  width: 100vw;
  margin-top: 12px;
`;

const PlayList = styled.div`
  width: 150px;
  height: 150px;
  padding: 4px;
  :hover {
    background-color: #F1F1EF;
    color: black;
    cursor: pointer;
  }
`;

const BotaoExcluir = styled.button `
  background-color: #FF5C5C;
  color: white;
  border-radius: 4px;
  border: none;
  :hover {
    box-shadow: 0 0 5px #FF5C5C;
    cursor: pointer;
  }
`;
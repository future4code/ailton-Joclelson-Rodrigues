import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

export default class DetalhesPlayList extends Component {
  state = {
    inputArtista: "",
    inputMusica: "",
    inputLink: "",
  };

  manipulaInputArtista = (e) => {
    this.setState({ inputArtista: e.target.value });
  };

  manipulaInputMusica = (e) => {
    this.setState({ inputMusica: e.target.value });
  };

  manipulaInputLink = (e) => {
    this.setState({ inputLink: e.target.value });
  };

  adicionarMusica = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputLink,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      })
      .then((res) => {
        alert('Adicionada com sucesso"')
      })
      .catch((err) => {
        alert(err);
      });
  };

  excluirMusica = (playlistId, trackId) => {
    console.log('ok')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`

    axios.delete(url, {
      headers: {
        Authorization: 'joclelson-rodrigues-ailton'
      }
    }).then((res) => {
      alert('Excluido com sucesso"')
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    const tracks = this.props.detalhes.map((musica) => {
      return (
        <Musicas key={musica.id}>
          {musica.artist} - {musica.name} 
          <AudioPlayer ref="audio_tag" src={musica.url} controls/>
          <BotaoExcluir onClick={() => {this.excluirMusica(this.props.idPlayList, musica.id)}}>x</BotaoExcluir>
        </Musicas>
      );
    });
    return (
      <div>
        <Header>
          <Logo>Musicas da Playlist</Logo>
        </Header>
        <ContainerMusicas>
          {tracks}
        </ContainerMusicas>
        <ContainerAddMusica>
          <Input
            onChange={this.manipulaInputArtista}
            value={this.state.inputArtista}
            placeholder="Artista ou Banda"
          />
          <Input
            onChange={this.manipulaInputMusica}
            value={this.state.inputMusica}
            placeholder="Musica"
          />
          <Input
            onChange={this.manipulaInputLink}
            value={this.state.inputLink}
            placeholder="Link da Musica"
          />
          <BotaoAdicionar onClick={() => this.adicionarMusica(this.props.idPlayList)}>Add Musica</BotaoAdicionar>
          <BotaoVoltar onClick={this.props.irCriarPlayList}>Voltar</BotaoVoltar>
        </ContainerAddMusica>
      </div>
    );
  }
}


const Header = styled.header `
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
`;

const Logo = styled.h3 `
  color: #fff;
`;

const ContainerMusicas = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Musicas = styled.div `
  height: 50px;
  width: 800px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const AudioPlayer = styled.audio `
  width: 100%;
`;

const ContainerAddMusica = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px auto;
  width: 200px;

`;

const Input = styled.input `
  padding: 5px;
  border-radius: 6px;
  margin: 4px;
  border: 2px solid #00CAF4;
  outline: none;
`;

const BotaoAdicionar = styled.button `
  width: 50%;
  border: none;
  background-color: #00CAF4;
  border-radius: 6px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  margin: 12px;
  :hover {
    box-shadow: 0 0 5px #00CAF4;
    cursor: pointer;
  }
`;

const BotaoVoltar = styled.button `
  width: 50%;
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

const BotaoExcluir = styled.button `
  background-color: #FF5C5C;
  color: white;
  border-radius: 4px;
  padding: 5px;
  border: none;
  :hover {
    box-shadow: 0 0 5px #FF5C5C;
    cursor: pointer;
  }
`;
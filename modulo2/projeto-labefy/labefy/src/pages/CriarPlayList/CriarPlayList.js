import React, { Component } from "react";
import axios from "axios";
import { urlCriaPlayList, urlPegarPlayList } from '../../constants/urls'


export default class CriarPlayList extends Component {
  state = {
    inputCriar: "",
    playLists: []
  };

  componentDidMount() {
    this.pegarPlayList()
  }

  manipularInput = (e) => {
    this.setState({ inputCriar: e.target.value });
  };

  criarPlayList = () => {
    const body = {
      name: this.state.inputCriar,
    };
    axios
      .post( urlCriaPlayList, body, {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      })
      .then((res) => {
        alert('Cadastrado com sucesso!')
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  pegarPlayList = () => {
    axios.get(urlPegarPlayList , {
      headers: {
        Authorization: 'joclelson-rodrigues-ailton'
      }
    }).then((res) => {
      this.setState({playLists: res.data.result.list})
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const playList = this.state.playLists.map((list) => {
      return <div key={list.id}>{list.name}</div>
    })
    return (
      <div>
        <input
          onChange={this.manipularInput}
          value={this.state.inputCriar}
          placeholder="Criar Play List"
        />
        <button onClick={this.criarPlayList}>Criar</button>
        {playList}
      </div>
    );
  }
}

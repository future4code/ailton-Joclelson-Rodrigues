import axios from "axios";
import React from "react";
import CriarPlayList from "./pages/CriarPlayList/CriarPlayList";
import DetalhesPlayList from "./pages/DetalhesPlayList/DetalhesPlayList";

export default class App extends React.Component {
  state = {
    telas: "criarplay",
    detalhes: [],
    idPlayList: "",
  };

  irDetalhes = (id) => {
    this.setState({ telas: "detalhes" });
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "joclelson-rodrigues-ailton",
        },
      })
      .then((res) => {
        this.setState({ detalhes: res.data.result.tracks });
        this.setState({ idPlayList: id });
      })
      .catch((err) => {
        alert(err);
      });
  };

  irCriarPlayList = () => {
    this.setState({ telas: "criarplay" });
  };

  selecaoDeTela = () => {
    switch (this.state.telas) {
      case "criarplay":
        return <CriarPlayList irDetalhes={this.irDetalhes} />;
      case "detalhes":
        return (
          <DetalhesPlayList
            idPlayList={this.state.idPlayList}
            detalhes={this.state.detalhes}
            irCriarPlayList={this.irCriarPlayList}
          />
        );
      default:
        return <CriarPlayList />;
    }
  };

  render() {
    return <div>{this.selecaoDeTela()}</div>;
  }
}

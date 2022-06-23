import React from "react";
import CriarPlayList from './pages/CriarPlayList/CriarPlayList'
import DetalhesPlayList from './pages/DetalhesPlayList/DetalhesPlayList'


export default class App extends React.Component {
  state = {
    telas: "criarplay"
  }

  selecaoDeTela = () => {
    switch (this.state.telas){
      case 'criarplay':
        return <CriarPlayList />
      case 'detalhes':
        return <DetalhesPlayList />
      default:
        return <CriarPlayList />
    }
  }

  render() {
    return (
      <div>
        {this.selecaoDeTela()}
      </div>
    )
  }
}

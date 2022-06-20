import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Cadastro = styled.div `
  border: 1px solid gray;
  width: 300px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Botao = styled.button `
  margin: 6px;
  cursor: pointer;
`
const Inputs = styled.input `
  margin: 2px;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/id/1005/200/150",
      },
      {
        nomeUsuario: "juliana",
        fotoUsuario: "https://picsum.photos/id/1005/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "alex",
        fotoUsuario: "https://picsum.photos/id/1025/50/50",
        fotoPost: "https://picsum.photos/id/1001/200/150",
      },
    ],
    inputNomeUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  };

  onChangeNameUsuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }
  onChangeFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }
  onChangeFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }
  adicionarPerfil = () => {
    const novosUsuarios = [...this.state.pessoas, 
      {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
      }
    ]
    this.setState({pessoas: novosUsuarios})
    this.setState({inputNomeUsuario: ''})
    this.setState({inputFotoUsuario: ''})
    this.setState({inputFotoPost: ''})
  }

  render() {
    const listaDeComponentes = this.state.pessoas.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <Cadastro>
          <p>Post</p>
        <Inputs 
            value={this.state.inputNomeUsuario}
            placeholder= 'Nome Usuário'
            onChange={this.onChangeNameUsuario}
          />
          <Inputs 
            value={this.state.inputFotoUsuario} 
            placeholder="Foto Usuário"
            onChange={this.onChangeFotoUsuario}
          />
            <Inputs value={this.state.inputFotoPost}
            placeholder='Foto Post'
            onChange={this.onChangeFotoPost}
          />

          <Botao onClick={this.adicionarPerfil}>Adicionar</Botao>
        </Cadastro>
          
        {listaDeComponentes}

      </MainContainer>
    );
  }
}

export default App;

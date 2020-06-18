import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const UserPhoto = styled.img `
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img `
  width: 100%;
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
` 

class App extends React.Component {
  
  state = {
    posts: [
    {nomeUsuario: 'Kamila', fotoUsuario: 'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
    {nomeUsuario: 'João', fotoUsuario: 'https://picsum.photos/50/51', fotoPost: 'https://picsum.photos/200/151'},
    {nomeUsuario: 'Maria', fotoUsuario: 'https://picsum.photos/50/52',fotoPost: 'https://picsum.photos/200/152'}
    ],

    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: ""

  }

  adicionaPost = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };

    const novoUsuarios = [...this.state.posts, novoUsuario];

      
      this.setState({ posts: novoUsuarios });

      this.setState({ valorNomeUsuario: "" });
      this.setState({ valorFotoUsuario: "" });
      this.setState({ valorFotoPost: "" });

    };
    
    onChangeInputUsuario = event => {
      this.setState({ valorNomeUsuario: event.target.value });
    };
  
    onChangeInputFotoUsuario = event => {
      this.setState({ valorFotoUsuario: event.target.value });
    };
  
    onChangeInputFotoPost = event => {
      this.setState({ valorFotoPost: event.target.value });
    };
  
  
  render() {

    const listaDePosts = this.state.posts.map((post)=>{
      return(
        <PostContainer>
          <PostHeader>
            <UserPhoto src = {post.fotoUsuario} />
            <span>{post.nomeUsuario}</span>
          </PostHeader>
            <PostPhoto src = {post.fotoPost} />
        </PostContainer>
      )
    })

    return (
      <div>
        <div>
          <input
            value={this.state.valorNomeUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto de perfil"}
          />
          <input
            value={this.state.valorFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />
          <button onClick={this.adicionaPost}>Publicar</button>
        </div>
      <div>
        {listaDePosts}
      </div>
      </div>
    );
  }
}

export default App;

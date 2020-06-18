import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  
  state = {
    posts: [
    {nomeUsuario: 'Kamila', fotoUsuario: 'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
    {nomeUsuario: 'João', fotoUsuario: 'https://picsum.photos/50/51', fotoPost: 'https://picsum.photos/200/151'},
    {nomeUsuario: 'Maria', fotoUsuario: "https://picsum.photos/50/52",fotoPost: "https://picsum.photos/200/152"}
    ]
  }
  
  
  render() {

    const listaDePosts = this.state.posts.map((post)=>{
      return(
        <div>
          <p>{post.nomeUsuario}</p>
          <p>{post.fotoPost}</p>
          <p>{post.fotoUsuario}</p>
        </div>
      )
    })

    return (
      <div className={'app-container'}>
        {/* <Post
          nomeUsuario={'Kamila'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'João'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        /> */}
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;

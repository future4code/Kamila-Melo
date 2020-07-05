import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Botao = styled.button`
  border:1px solid #25692A;
  border-radius:4px;
  display:inline-block;
  cursor:pointer;
  font-family:Verdana;
  font-weight:bold;
  font-size:13px;
  padding:6px 10px;
  text-decoration:none;
  border-color:#68b465;
  background:linear-gradient(to bottom, #abd5aa 5%, #68b465  100%);
  box-shadow:inset 0px 1px 0px 0px #e3f1e3;
  color:#fff;
  text-shadow:0px 1px 0px #528009;
  &:hover{
    background:linear-gradient(to bottom, #68b465 5%, #abd5aa 100%);
  }
`

const NomePlaylist = styled.input`
    margin-top: 64px;
    width: 300px;
    height: 25px;
`

class CriarPlaylist extends React.Component{
    state = {
        nomePlaylist: ""
    }

    onChangeNomePlaylist = event => {
        this.setState ({nomePlaylist: event.target.value})
    }

    criaPlaylist = () => {
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{headers: {Authorization: "kamila-melo-turing"}}).then(response => {
            alert(`Playlist ${this.state.nomePlaylist} criada com sucesso!`)
            this.setState({nomePlaylist: ""})
        }).catch(error => {
            if(error.message === "Request failed with status code 400"){
                alert("Playlist já criada.")
            }else{
                console.log(error.message)
            }

        })
    }


    render(){
        return(
            <div>
                <NomePlaylist type="text" placeholder = "Nome da Playlist" value={this.state.nomePlaylist} onChange={this.onChangeNomePlaylist}/>
                <Botao onClick={this.criaPlaylist}>Criar Playlist</Botao>
            </div>
        )
    }
}

export default CriarPlaylist 
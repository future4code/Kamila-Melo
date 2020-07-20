import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Lista = styled.span`
    color: white;
`

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const BoxPlaylists = styled.ul`
    width: 20%;
    border: 1px solid white;
    margin: auto;
    margin-top: 64px;
    height: 50vh;
`

class VisualizarPlaylist extends React.Component{
    state = {
        playlistsCriadas: [],
        playlistId: "",
    }

    componentDidMount = () => {
        this.listaDePlaylists()
    }

    listaDePlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers: {Authorization: "kamila-melo-turing"}}).then(response => {
            this.setState({playlistsCriadas: response.data.result.list})
        }).catch(error => {
            console.log(error.message)
        })
    }

    deletaPlaylist = (playlistId) => {
        if(window.confirm("Tem certeza que deseja deletar a playlist?")){
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{headers: {Authorization: "kamila-melo-turing"}}).then(() => {
                alert("Playlist apagada com sucesso!");
                this.listaDePlaylists();
            }).catch(error => {
                alert("ERRO AO APAGAR PLAYLIST")
            })
        }
        
    }

    render(){
        return(
            <div>
                <BoxPlaylists>
                    {this.state.playlistsCriadas.length === 0 && <div>Carregando...</div>}
                    {this.state.playlistsCriadas.map(play => {
                        return (
                            <div key = {play.id}>
                                <li>
                                    <Lista>{play.name}</Lista>
                                    <DeleteButton onClick={() => this.deletaPlaylist(play.id)}>X</DeleteButton>
                                </li>
                            </div>
                        );
                    })}
                </BoxPlaylists>
            </div>
        )
    }
       
}

export default VisualizarPlaylist
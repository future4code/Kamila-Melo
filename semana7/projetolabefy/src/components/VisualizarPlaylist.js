import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DetalhesPlaylist from './DetalhesPlaylist'

const Lista = styled.span`
    color: white;
    margin-right: 64px;
`

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const BoxPlaylists = styled.ul`
    width: 20%;
    margin: auto;
    margin-top: 64px;
    text-align: center;
`

const Playlist = styled.li`
    text-align: center;
    margin-right: 32px;
    margin-top: 32px;
`

class VisualizarPlaylist extends React.Component{
    state = {
        playlistsCriadas: [],
        playlistId: "",
        pagina: "visualizaPlaylists"
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

    ChangePage = playlistId =>{
        if(this.state.pagina === "visualizaPlaylists"){
            this.setState({pagina: "detalhesPlaylists", playlistId: playlistId})
        }
        else{
            this.setState({pagina: "visualizaPlaylists", playlistId: ""})
        }
    }

    render(){
        return(
            <div>
                {this.state.pagina === "visualizaPlaylists" ? (
                    <BoxPlaylists>
                        {this.state.playlistsCriadas.length === 0 && <div>Carregando...</div>}
                        {this.state.playlistsCriadas.map(play => {
                            return (
                                <div key = {play.id} >
                                    <Playlist playlistId = {play.id}>
                                        <Lista onClick={() => this.ChangePage(play.id)}>{play.name}</Lista>
                                        <DeleteButton onClick={() => this.deletaPlaylist(play.id)}>X</DeleteButton>
                                        <hr/>
                                    </Playlist>
                                </div>
                            );
                        })}
                    </BoxPlaylists>
                ) : (<DetalhesPlaylist playlistId={this.state.playlistId} ChangePage={this.ChangePage}/>)}
                
            </div>
        )
    }

}

export default VisualizarPlaylist
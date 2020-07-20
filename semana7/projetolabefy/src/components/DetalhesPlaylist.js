import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Botao = styled.button`
    margin-left: 64px;
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

const DadosMusicas = styled.div`
    margin-top: 64px;
    color: white;
    text-align: calc(center - 64px);
`

const TextoLabel = styled.label`
    margin-left: 64px;
`

const InputsInfos = styled.input`
    width: 250px;
    height: 25px;
`

const TextoSpan = styled.span`
    color: white;
    font-size: 16px;
    margin-right: 64px;
`

const Detalha = styled.div`
    margin-top: 64px;
`

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`

class DetalhesPlaylist extends React.Component{
    state = {
        detalhes: [],
        nomeDaMusica: "",
        artist: "",
        url: "",
        musicaId: ""
    }

    componentDidMount = () => {
        this.detalharPlaylist()
    }

    detalharPlaylist = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,{headers: {Authorization: "kamila-melo-turing"}}).then(response => {
            this.setState({detalhes:response.data.result.tracks})
        }).catch(error => {
            alert("Erro ao mostrar músicas");
        })
    }

    deletaMusica = (musicaId) => {
        if(window.confirm("Tem certeza que deseja deletar a música?")){
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${musicaId}`,{headers: {Authorization: "kamila-melo-turing"}}).then(() => {
                alert("Música apagada com sucesso!");
                this.detalharPlaylist();
            }).catch(error => {
                alert("ERRO AO APAGAR MÚSICA")
            })
        }
    }

    addMusicas = () => {
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,body,{headers: {Authorization: "kamila-melo-turing"}}).then(response => {
            alert(`música ${this.state.nomeDaMusica} criada com sucesso!`)
            this.detalharPlaylist()
            this.setState({nomeDaMusica: ""})
            this.setState({artist: ""})
            this.setState({url: ""})
        }).catch(error => {
            alert("ERRO AO ADICIONAR A MÚSICA")
        })
    }

    onChangeNomeMusica = event => {
        this.setState ({nomeDaMusica: event.target.value})
    }

    onChangeNomeArtista = event => {
        this.setState ({artist: event.target.value})
    }

    onChangeUrl = event => {
        this.setState ({url: event.target.value})
    }

    render(){
        const musicas = this.state.detalhes.map(detalhe => {
            return (
                <Detalha key={detalhe.id}>
                    <TextoSpan musicaId = {detalhe.id}> 
                        {detalhe.name} - {detalhe.artist}
                    </TextoSpan>
                    <DeleteButton onClick={() => this.deletaMusica(detalhe.id)}>X</DeleteButton>
                    <br/>
                    <audio controls="controls"> 
                        <source src={detalhe.url} type="audio/ogg" />
                    </audio>
                </Detalha>
            )
            
        })
       
        return(
            <div>
                <DadosMusicas>
                    <label>Nome da Música: </label>
                    <InputsInfos type="text" placeholder = "Nome da Música" value={this.state.nomeDaMusica} onChange={this.onChangeNomeMusica}/>
                    <TextoLabel>Artista: </TextoLabel>
                    <InputsInfos type="text" placeholder = "Nome do Artista/Banda" value={this.state.artist} onChange={this.onChangeNomeArtista}/>
                    <TextoLabel>URL da Música: </TextoLabel>
                    <InputsInfos type="text" placeholder = "URL da Música" value={this.state.url} onChange={this.onChangeUrl}/>
                    <Botao onClick={this.addMusicas}>Adicionar Música</Botao>
                </DadosMusicas>
                <div>
                    {musicas}
                    <hr/>
                    <Botao onClick = {this.props.ChangePage}>Voltar</Botao>
                </div>
            </div>
        )
    }
}

export default DetalhesPlaylist
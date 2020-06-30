import React from 'react'
import styled from 'styled-components'

const CadastroContainer = styled.div`
    border: 1px solid black;
    text-align: center;
    width: 400px;
    margin: 32px auto;
`

const DivNome = styled.div`
    margin: 16px 0;
`

const DivEmail = styled.div`
    margin: 16px 0;
`

const BotaoCadastro = styled.button`
    margin: 16px 0;
    font-weight: bold;
    background-color: purple;
    color: white;
    border-radius: 8px;
`

const InputNome = styled.input`
    width: 250px;
    height: 25px;
`

const InputEmail = styled.input`
    width: 250px;
    height: 25px;
`

class Cadastro extends React.Component{
    render(){
        return(
            <CadastroContainer>
                <DivNome>
                    <label><strong>Nome: </strong></label>
                    <InputNome 
                        onChange={this.props.onChangeNomeValue}
                        value={this.props.nomeValue}
                    />
                </DivNome>
                <DivEmail>
                    <label><strong>E-mail: </strong></label>
                    <InputEmail 
                        onChange={this.props.onChangeEmailValue}
                        value={this.props.emailValue}
                    />
                </DivEmail>
                <BotaoCadastro onClick = {this.props.onClickSalvar}>Salvar</BotaoCadastro>
            </CadastroContainer>
        )
    }
}

export default Cadastro
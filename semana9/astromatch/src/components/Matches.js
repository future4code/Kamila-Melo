import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`
const Div = styled.div`
    overflow: auto;
    height: 200px;
`

const DivMatches = styled.div`
    width: 100%;
`

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-left: 60px;
 li{
     display: flex;
     align-items: center;
     margin-top: 8px;
 }
`

const DivBotaoLimpar = styled.div`
    text-align: center;
    position: relative;
    bottom: -250px;
`

const BotaoLimpar = styled.button`
    color: white;
    background-color: red;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
`

function Matches (props){

    const [match, setMatch] = useState([])

    useEffect(()=>{
        getMatches()
    },[])

    const getMatches = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kamila/matches')
            .then(response => {
                setMatch(response.data.matches)
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }

    const onClickClear = () => {
        const body = {
            "id": "PatusZf4mHH6UoZfYC8I",
        }
        if(window.confirm("Tem certeza que deseja limpar os matches?")){
            axios
                .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kamila/clear',body)
                .then(response => {
                    setMatch([])
                })
                .catch((error)=>{
                    console.log(error.message)
                })
        }
    }

    return(
        <DivMatches>
            <Div>
                <Ul>
                    {match.map(match => {
                        return(
                            <li key = {match.id}>
                                <UserPhoto src={match.photo} alt="photo"/>
                                <span><strong>{match.name}, {match.age}</strong></span>
                            </li>
                        )
                    })}
                </Ul>
            </Div>
            <DivBotaoLimpar>
                <BotaoLimpar onClick={onClickClear}>LIMPAR</BotaoLimpar>
            </DivBotaoLimpar>
        </DivMatches>
    )
}

export default Matches;
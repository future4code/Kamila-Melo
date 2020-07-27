import React from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    position: relative;
    bottom: -20px;
`

const ButtonNope = styled.button`
    position: relative;
    right: 100px;
    color: white;
    background-color: red;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    border-radius: 16px;
    width: 80px;
    font-size: 1.5em;
`

const ButtonLike = styled.button`
    position: relative;
    left: 100px;
    color: white;
    background-color: green;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    border-radius: 16px;
    width: 80px;
    font-size: 1.5em;
`

function ButtonsMatches (props){
    return(
        <ButtonsContainer>
            <ButtonNope onClick = {props.onClickReject}>Nope</ButtonNope>
            <ButtonLike onClick = {props.onClickMatch}>Like</ButtonLike>
        </ButtonsContainer>
    )
}

export default ButtonsMatches;
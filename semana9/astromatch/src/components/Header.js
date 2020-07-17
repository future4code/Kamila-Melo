import React from 'react'
import styled from 'styled-components'
import Title from '../images/astromatch.png'
import Heart from '../images/match.png'
import Back from '../images/voltar.png'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
`

const Image = styled.img`
    position: relative;
    width: 200px;
`

const ImageBack =styled.img`
    position: relative;
    left: 70px;
    width: 30px;
    top: -15px;
    cursor: pointer;
`

const ImageHeart = styled.img`
    position: relative;
    left: 70px;
    width: 40px;
    top: -13px;
    cursor: pointer;
`

function Header (props){
    return(
        <HeaderContainer>
            <Image src={Title} />
            {props.pagMatch ? <ImageBack src={Back} onClick={props.onClickRender}/> : <ImageHeart src={Heart} onClick={props.onClickRender}/>}
        </HeaderContainer>
    )
}

export default Header
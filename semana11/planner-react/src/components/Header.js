import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    margin:0 auto;
    background-color: rgb(2,20,68);
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleHeader = styled.h1`
    color: white;
`

function Header () {
    return(
        <HeaderContainer>
            <TitleHeader>Planejamento Semanal</TitleHeader>
        </HeaderContainer>
    )  
}

export default Header
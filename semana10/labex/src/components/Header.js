import React from 'react'
import styled from 'styled-components'

const TitleHeader = styled.h1`
    background-color: #3f48cc;
    color: white;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header () {
    return(
        <div>
            <TitleHeader>Labex</TitleHeader>
        </div>
    )
}

export default Header
import React from 'react'
import styled from 'styled-components'

const TitleHeader = styled.h1`
    background-color: green;
    color: white;
    text-align: center;
    height: 6vh;
    margin: auto;
`

function Header () {
    return(
        <div>
            <TitleHeader>Labex</TitleHeader>
        </div>
    )
}

export default Header
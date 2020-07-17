import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ButtonsMatches from './ButtonsMatches'

const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivFotoBio = styled.div`
    width: 400px;
    height: 450px;
`

const PhotoProfile = styled.div`
    width: 100%;
`

const BioProfile = styled.div`
    position: relative;
    bottom: 160px;
    width: 300px;
    right: -30px;
`

const Image = styled.img`
    width: 400px;
    height: 450px;
    border-radius: 16px;
`

const P1 = styled.p`
    position: relative;
    color: #FFF;
    font-weight: bold;
    text-shadow: black 3px 3px 5px;
    font-size: 24px;
`

const P2 = styled.p`
    position: relative;
    color: #FFF;
    font-weight: bold;
    text-shadow: black 3px 3px 5px;
    font-size: 16px;
`


function PhotoUser (props){

    const [photo, setPhoto] = useState([])

    useEffect(()=>{
        getProfiles()
        
    },[])


    const getProfiles = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kamila/person')
        .then(response => {
            setPhoto(response.data.profile)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const onClickMatch = () => {
        const body = {
            "id": photo.id,
	        "choice": true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kamila/choose-person',body)
        .then(() => {
            console.log("Match")
            getProfiles()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const onClickReject = () => {
        const body = {
            "id": photo.id,
	        "choice": false
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kamila/choose-person',body)
        .then(() => {
            console.log("Nope")
            getProfiles()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return(
        <PhotoContainer>
            {!photo ? <p>Carregando...</p> :
            <DivFotoBio>
                <PhotoProfile>
                    <Image src={photo.photo} alt="Foto" />
                </PhotoProfile>
                <BioProfile>
                    {photo.name && <P1>{photo.name}, {photo.age}</P1>}
                    <P2>{photo.bio}</P2>
                </BioProfile>
            </DivFotoBio>}
            <ButtonsMatches onClickReject={onClickReject} onClickMatch={onClickMatch}/>
        </PhotoContainer>
    )
}

export default PhotoUser;
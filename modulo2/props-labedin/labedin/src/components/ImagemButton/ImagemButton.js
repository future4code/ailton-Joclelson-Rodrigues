import React from 'react';
import styled from 'styled-components';

const ContainerButon = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const ImagemBotao = styled.img `
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
`
const Link = styled.a `
    text-decoration: none;
`

function ImagemButton(props) {
    return (
        <ContainerButon>
            <ImagemBotao src={ props.imagem }/>
            <Link href={props.link} target='_blank'>
            <p>{ props.texto }</p>
            </Link>
        </ContainerButon>
    )
}

export default ImagemButton;
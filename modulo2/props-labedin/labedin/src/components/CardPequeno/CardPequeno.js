import React from 'react';
import styled from 'styled-components';

const SmallContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const CardImagem = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <SmallContainer>
            <CardImagem src={ props.imagem } />
            <div>
                <p>{ props.texto }</p>
            </div>
        </SmallContainer>
    )
}

export default CardPequeno;
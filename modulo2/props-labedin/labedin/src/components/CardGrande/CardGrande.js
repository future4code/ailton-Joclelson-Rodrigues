import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const CardImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TextoH4 = styled.h4 `
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <CardContainer>
            <CardImagem src={ props.imagem } />
            <div>
                <TextoH4>{ props.nome }</TextoH4>
                <p>{ props.descricao }</p>
            </div>
        </CardContainer>
    )
}

export default CardGrande;
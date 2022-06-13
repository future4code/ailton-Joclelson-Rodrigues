import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
    text-align: center;
`
const Imput = styled.input `
    padding: 8px 10px;
    border-radius: 10px;
    width: 20em;
`

export default class Etapa2 extends Component {


  render() {
    return (
        <Container>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <div>
                <p>5. Qual curso ?</p>
                <Imput />
            </div>
            <div>
                <p>6. Qual a unidade de ensino ?</p>
                <Imput />
            </div>
        </Container>
    )
  }
}

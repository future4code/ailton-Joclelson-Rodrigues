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
const Select = styled.select `
    padding: 8px 10px;
    width: 22em;
    border-radius: 10px;
    border: 2px solid black;
`

export default class Etapa3 extends Component {


  render() {
    
    return (
        <Container>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <div>
                <p>7. Por que você não terminou um curso de graduação ?</p>
                <Imput />
            </div>
            <div>
                <p>8. Você fez algum curso complementar ?</p>
                <Select>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </Select>
            </div>
        </Container>
    )
  }
}

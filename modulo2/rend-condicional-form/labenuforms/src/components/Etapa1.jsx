import React, { Component } from 'react'
import App from '../App'
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

export default class Etapa1 extends Component {
  render() {
    return (
        <Container>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <div>
                <p>1. Qual o seu nome?</p>
                <Imput />
            </div>
            <div>
                <p>2. Qual sua idade ?</p>
                <Imput />
            </div>
            <div>
                <p>3. Qual seu email ?</p>
                <Imput />
            </div>
            <div>
                <p>4. Qual a sua escolaridade ?</p>
                <Select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </Select>
            </div>
        </Container>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
    text-align: center;
`

export default class Final extends Component {


  render() {
    
    return (
        <Container>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Container>
    )
  }
}

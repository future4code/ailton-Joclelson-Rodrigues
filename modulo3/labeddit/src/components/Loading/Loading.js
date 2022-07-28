import React from 'react'
import loading from "../../assets/img/loading.gif"
import styled from 'styled-components'

const Loading = () => {

  return (
    <LoadingImg src={loading} alt='loading' />
  )
}
export default Loading

const LoadingImg = styled.img `
  width: 100px;
  margin: 26px 0;
`;
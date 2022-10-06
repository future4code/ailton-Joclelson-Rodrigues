import styled from "styled-components";

export const TitleH3 = styled.h3`
  text-align: center;
  color: #0dab77;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  gap: 10px;
  box-shadow: 0 0 6px 1px lightgray;
  border-radius: 6px;
  margin: 8px;
  p {
    padding: 4px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

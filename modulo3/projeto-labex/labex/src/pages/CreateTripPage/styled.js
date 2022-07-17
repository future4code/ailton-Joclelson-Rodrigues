import styled from "styled-components";

export const Header = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 0 4px lightgray;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 20px auto;
  gap: 16px;
  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid lightgray;
    outline: none;
    width: 100%;
    :hover {
      border: 1px solid #22a7f2;
    }
  }
  button {
    width: 50%;
    padding: 10px;
    background-color: #22a7f2;
    border: none;
    color: #fff;
    font-weight: bold;
    border-radius: 6px;
    :hover {
      cursor: pointer;
      box-shadow: 0 0 6px lightgray;
      transition: 0.3s;
    }
  }
`;

export const ButtonBack = styled.button`
  width: 12%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #22a7f2;
  border-radius: 6px;
  font-weight: bold;
  color: #22a7f2;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 4px lightgray;
  }
  @media (max-width: 600px){
        width: 40%;        
    }
`;

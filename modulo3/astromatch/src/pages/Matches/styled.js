import styled from "styled-components";

export const Pagina = styled.div`
  background-color: #f5f7fa;
  height: 100vh;
  span {
    color: #fd5068;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 8px auto;
  color: #dadfe6;
  font-size: 1.5rem;
  div:nth-child(2) {
    color: #fd5068;
  }
  div:hover {
    color: #fe466d;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const ContainerPai = styled.div`
  width: 400px;
  height: 80vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;

export const ContainerMatch = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  margin: auto;
  padding: 12px;
  border-radius: 10px;
  :hover {
    background-color: #dadfe6;
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 6px;
  }
`;

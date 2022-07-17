import styled from "styled-components";

export const ContainerDad = styled.div`
  h3 {
    margin: 12px;
  }
  button {
    width: 10%;
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
  }
  @media (max-width: 600px) {
    button {
      width: 40%;
    }
  }
`;

export const Header = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 0 4px lightgray;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 230px;
  margin: 12px auto;
  gap: 10px;
  box-shadow: 0 0 4px lightgray;
  border-radius: 10px;
`;

export const ContainerCandidate = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 16px auto;
`;

export const Candidate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 12px;
  padding: 12px;
  gap: 12px;
  border: 1px solid #22a7f2;
  box-shadow: 0 0 3px lightgray;
  border-radius: 8px;
  div {
    display: flex;
    justify-content: center;
    font-size: 2.2em;
    gap: 18px;
    #buttonApprov {
      color: #6dcc6d;
      border-radius: 50%;
      :hover {
        transform: scale(1.2);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.3s;
      }
    }
    #buttonReprov {
      color: #f03d5f;
      border-radius: 50%;
      :hover {
        transform: scale(1.2);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
`;

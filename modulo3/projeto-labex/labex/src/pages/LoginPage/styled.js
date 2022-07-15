import styled from "styled-components";


export const ContainerDad = styled.div `
    border: 1px solid lightgray;
    width: 500px;
    height: 400px;
    margin: 20px auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px lightgray;
    background-color: #fff;
`;

export const ContainerLogin = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    gap: 20px;
    img {
        width: 150px;
    }
    input {
        padding: 12px;
        width: 80%;
        border-radius: 6px;
        border: 1px solid lightgray;
        outline: none;
    }
`;

export const ContainerButtons = styled.div `
    display: flex;
    justify-content: center;
    width: 300px;
    margin: 20px auto;
    gap: 16px;
    button {
        width: 80%;
        padding: 10px;
        background-color: #22A7F2;
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
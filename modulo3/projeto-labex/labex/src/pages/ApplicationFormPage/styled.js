import styled from "styled-components";

export const ContainerDad = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #EDF2F7;
    button {
        width: 12%;
        padding: 10px;
        background-color: transparent;
        border: 1px solid #22A7F2;
        border-radius: 6px;
        font-weight: bold;
        color: #22A7F2;
        :hover {
            cursor: pointer;
            box-shadow: 0 0 4px lightgray;
        }
    }
    @media (max-width: 600px){
        h2 {
            padding: 12px;
        }
        button {
            width: 40%;
        }
    }
`;

export const ContainerForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 20px auto;
    gap: 16px;
    select {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid lightgray;
        width: 100%;
    }
    input {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid lightgray;
        outline: none;
        width: 100%;
        :hover {
            border: 1px solid #22A7F2;
        }
    }
    button {
        width: 50%;
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
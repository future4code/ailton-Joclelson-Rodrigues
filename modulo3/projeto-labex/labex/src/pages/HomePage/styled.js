import styled from "styled-components";

export const ContainerPage = styled.div `
    display: flex;
`;

export const ContainerImg = styled.div `
    display: flex;
    width: 50vw;
    height: 100vh;
    background-image: url(${(props) => props.walpperInic});
    background-size: cover;

    @media (max-width: 600px){
        display: none;
    }
`;

export const ContainerAdm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
    gap: 16px;
    background-color: #EDF2F7;
    img {
        width: 300px;
        margin: 18px;
    }
    @media (max-width: 600px){
        width: 100%;        
    }
`;


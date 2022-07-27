import styled from "styled-components";

export const ContainerDad = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #EDF2F7;
    h2 {
        padding: 16px;
    }
    div {
        display: flex;
        justify-content: center;
        gap: 12px;
        
    }
`;

export const ContainerTrips = styled.div `
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 16px auto;
`;

export const ListTrip = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 14px;
    width: 280px;
    height: 200px;
    margin: 12px;
    border: 1px solid lightgray;
    box-shadow: 0 0 4px lightgray;
    :hover {
        transform: scale(1.1); 
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        border: 1px solid #22A7F2;
        cursor: pointer;
        transition: 0.3s;
    }
`;
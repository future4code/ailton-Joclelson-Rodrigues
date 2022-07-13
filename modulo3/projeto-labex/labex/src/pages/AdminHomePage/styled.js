import styled from "styled-components";

export const Header = styled.header `
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    box-shadow: 0 0 4px lightgray;
    div{
        display: flex;
        gap: 12px;
    }
`;

export const ListTrip = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    padding: 16px;
    margin: 12px auto;
    border: 1px solid lightgray;
    box-shadow: 0 0 4px lightgray;

    :hover {
        cursor: pointer;
    }
`;
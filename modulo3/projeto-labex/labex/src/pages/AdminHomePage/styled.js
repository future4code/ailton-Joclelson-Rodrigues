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
        align-items: center;
        gap: 12px;
    }
    #buttonLogout {
        font-size: 2.2em;
        margin: 0 12px;
        :hover {
            color: #F03D5F;
            transition: 0.2s;
            cursor: pointer;
        }
    }
`;

export const CreateTrip = styled.div `
    #buttonCreate{
        margin: 16px;
        font-size: 3.5em;
        color: #22A7F2;
        border-radius: 50%;
    }
    #buttonCreate:hover {
        transform: scale(1.2); 
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: 0.3s;
    }
`;

export const ListTrip = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
   
    margin: 12px auto;
    border: 1px solid #22A7F2;
    box-shadow: 0 0 4px lightgray;
    p {
        flex-grow: 1;
        padding: 16px;
    }
    :hover {
        cursor: pointer;
        background-color: #22A7F2;
        color: #fff;
        transition: 0.3s;
    }
    #buttonTrash {
        padding: 16px;
        color: red;
        z-index: 1;
        :hover {
            transform: scale(1.1); 
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            background-color: #fff;
        }
    }
`;
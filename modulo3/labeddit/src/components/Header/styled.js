import styled from "styled-components";

export const ContainerHeader = styled.header `
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 4px lightgray;
    div {
        display: flex;
        align-items: center;
        margin-left: 12px;
        img {
            width: 60px;
        }
        h3 {
            cursor: pointer;
            transition: 0.2s ease-in-out;
            :active {
                transform: scale(1.5)
            }
        }
    }
    button {
        padding: 8px;
        background-color: transparent;
        border: none;
        font-weight: bold;
        border-radius: 8px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        :hover {
            color: #FF5204;
        }
        :active {
            transform: scale(1);
        }
        img {
            width: 25px;
            margin: 2px;
        }
    }
`;
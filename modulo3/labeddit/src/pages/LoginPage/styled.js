import styled from "styled-components";

export const ContainerLogo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        max-width: 180px;
    }
`;

export const ContainerForm =styled.form `
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 12px auto;
    gap: 14px;
    div {
        position: relative;
        label {
            position: absolute;
            left: 0;
            top: 14px;
            margin: 0 6px;
            z-index: -1;
            color: lightgray;
            transition: 0.2s ease-in-out;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid lightgray;
            background-color: transparent;
            border-radius: 8px;
            margin: 8px 0;
            outline: none;
            :focus ~ label, :valid ~ label {
                transform: translateY(-24px);
                font-size: 12px;
                color: #FF5204;
            }

        }
    }
    button {
        background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
        padding: 10px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        border-radius: 5px;
        border: 0px;
        font-weight: bold;
        box-shadow: 0px 0px 14px -7px #f09819;
        :hover {
            background-position: right center;
            color: #fff;
            cursor: pointer;
        }
        :active {
            transform: scale(0.95);
            }
    }
`;
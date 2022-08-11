import styled from "styled-components";

export const H4 =styled.h4 `
    text-align: center;
    margin: 8px 0;
`;

export const ContainerForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: auto;
    gap: 8px;
    textarea {
        border: 1px solid lightgray;
        background-color: #FBFBFB;
        border-radius: 6px;
        width: 100%;
        resize: none;
        outline: none;
        padding: 4px;
    }
    button {
        background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
        padding: 8px;
        margin: 10px;
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
            cursor: pointer;
        }
        :active {
            transform: scale(1);
            }
    }
`;

export const ContainerButtonBack = styled.div `
    width: 300px;
    margin: auto;
    text-align: center;
    button {
        width: 100%;
        padding: 4px;
        background-color: transparent;
        border: 1px solid #FF512F;
        border-radius: 6px;
        color: #FF512F;
        font-weight: bold;
        margin-bottom: 14px;
    }
`;

export const ContainerComments = styled.div `
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    
`;

export const Comments = styled.div `
    background-color: #FBFBFB;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 6px 0;
    #userp {
        color: #ccc;
    }
    p {
        margin: 4px;
    }
    #arrow {
        display: flex;
        align-items: center;
        border: 1px solid #ECECEC;
        border-radius: 15px;
        width: 22%;
        margin: 4px;
        p{
            margin: 0 7px;
        }
        img {
            width: 20px;
            margin: 6px;
            cursor: pointer;
            :active {
                transform: scale(1.1)
            }
        }
    }
`
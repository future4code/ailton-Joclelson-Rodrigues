import styled from "styled-components";

export const ContainerPost = styled.form `
    width: 400px;
    height: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #FF512F;
    input {
        width: 80%;
        padding: 5px;
        margin-top: 12px;
        border: 1px solid lightgray;
        border-radius: 8px;
        background-color: #FBFBFB;
        outline: none;
    }
    textarea {
        width: 80%;
        padding: 6px;
        margin: 12px;
        border-radius: 8px;
        resize: none;
        border: 1px solid lightgray;
        outline: none;
        background-color: #FBFBFB;
    }
    button {
        background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
        padding: 8px;
        margin: 10px;
        width: 80%;
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

export const ContainerFeed = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostCard = styled.div `
    width: 400px;
    height: 200px;
    margin: 12px;
    background-color: #FBFBFB;
    box-shadow: 0 0 4px lightgray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    #color-name {
        display: flex;
        flex: 1;
        color: lightgray;
    }
    p {
        display: flex;
        flex: 2;
        margin: 0 8px; 
    }
    div {
        display: flex;
        margin: 4px;
        #arrow {
            display: flex;
            align-items: center;
            border: 1px solid #ECECEC;
            border-radius: 15px;
            img {
                width: 20px;
                margin: 6px;
                cursor: pointer;
                #up:active {
                   transform: scale(1.1)
                }
            }
        }
        #comment {
            display: flex;
            align-items: center;
            border: 1px solid #ECECEC;
            border-radius: 15px;
            transition: 0.2s ease-in-out;
            img {
                width: 20px;
                margin: 6px;
            }
            :active {
                transform: scale(1.1)
            }
            :hover {
                cursor: pointer;
            }
        }
    }
`;
import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  margin: 28px 0;
`;

export const ContainerForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 22px auto;
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
        color: #ff5204;
      }
    }
  }
  p {
    text-align: justify;
    margin: 12px 0;
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
            cursor: pointer;
        }
        :active {
            transform: scale(0.95);
            }
  }
`;

export const Label = styled.label `
    display: block;
    position: relative;
    margin: 12px 0;
    padding-left: 28px;
    cursor: pointer;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        :checked ~ span {
          background-color: #FF5204;
        }
        :checked ~ span::after {
          display: block;
        }
    }
    span {
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        background-color: #ccc;
        border-radius: 4px;
        ::after {
          top: 5px;
          left: 9px;
          width: 5px;
          height: 10px;
          border: solid #fff;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          content: "";
          position: absolute;
          display: none;
        }
    }
`;
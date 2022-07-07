import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f7fa;
  span {
    color: #fd5068;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 8px auto;
  color: #dadfe6;
  font-size: 1.5rem;
  div:nth-child(1) {
    color: #fd5068;
  }
  div:hover {
    color: #fe466d;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const PhotoProfile = styled.div`
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  width: 400px;
  height: 80vh;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  color: #eee;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  :hover {
    transform: rotate(-45deg);
    opacity: 0.1;
    transition: all 0.5s;
  }
  .profile {
    width: 100%;
    background: rgb(2, 0, 36);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(35, 34, 65, 0) 0%,
      rgba(0, 0, 0, 0.7) 80%
    );
    border-radius: 10px;
  }
  .profile-info {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 1.3em;
  }
  .profile-info h3 {
    font-weight: lighter;
    margin-left: 3px;
  }
  .profile p {
    text-align: left;
    margin: 6px 10px;
    font-size: 1.2em;
  }
`;

export const ButtonsMatch = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 10px auto;
  font-size: 2.2rem;
  div:nth-child(1) {
    color: #fd5068;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
    cursor: pointer;
    :hover {
      background-color: #fd5068;
      color: #fff;
      transition: all 0.3s;
    }
  }
  div:nth-child(2) {
    height: 48px;
    width: 48px;
    font-size: 1.5rem;
    color: #2db1ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
    cursor: pointer;
    :hover {
      background-color: #2db1ff;
      color: #fff;
      transition: all 0.3s;
    }
  }
  div:nth-child(3) {
    color: #1be4a1;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
    cursor: pointer;
    :hover {
      background-color: #1be4a1;
      color: #fff;
      transition: all 0.3s;
    }
  }
`;

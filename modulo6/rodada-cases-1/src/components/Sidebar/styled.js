import styled from "styled-components";

export const Container = styled.div`
  background-color: #0dab77;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0px;
  width: 450px;
  animation: showSidebar 0.4s;
  box-shadow: -2px 0 5px 0px #0dab77;
  h2 {
    position: absolute;
    top: 80px;
    left: 20px;
    color: #fff;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 450px;
    }
  }
`;

export const Purchases = styled.table`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 120px;
  left: 10px;
  color: #fff;
  width: 430px;
  p {
    font-size: smaller;
  }
`;

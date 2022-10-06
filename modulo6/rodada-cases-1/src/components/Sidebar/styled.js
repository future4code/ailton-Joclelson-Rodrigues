import styled from "styled-components";

export const Container = styled.div`
  background-color: #0dab77;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0px;
  width: 400px;
  animation: showSidebar 0.4s;
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
      width: 400px;
    }
  }
`;

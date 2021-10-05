import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  animation-name: content;
  animation-duration: 2s;

  @keyframes content {
    0% {
      opacity: 0;
      transform: translate(-1.2rem, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;

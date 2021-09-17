import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  img {
    border-radius: 100%;
    margin-right: 30px;
    animation-name: photograph;
    animation-duration: 2s;
  }

  @keyframes photograph {
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
`;

import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  animation-name: conteudo;
  animation-duration: 8s;
`;

export const ALink = styled.a`
  color: var(--orange);
  font-weight: 400px;
`;

export const PContainer = styled.div`
  animation-name: conteudo;
  animation-duration: 2s;

  @keyframes conteudo {
    0% {
      opacity: 0;
      transform: translate(-20px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;

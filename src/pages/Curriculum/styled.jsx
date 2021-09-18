import styled from "styled-components";

export const Container = styled.div`
  line-height: 50px;

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
  .title {
    color: var(--orange);
  }
  article {
    color: var(--white);
  }


`;

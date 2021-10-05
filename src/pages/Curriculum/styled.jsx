import styled from 'styled-components';

const Container = styled.div`
  line-height: 50px;

  animation-name: conteudo;
  animation-duration: 2s;

  @keyframes conteudo {
    0% {
      opacity: 0;
      transform: translate(-1.2rem, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
  .title {
    color: var(--orange);
  }
  section,
  article {
    color: var(--white);
  }
`;

export default Container;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);

  animation-name: main-title;
  animation-duration: 2s;

  h1, h2 {
    text-transform: uppercase;
  }
  h1 {
    color: var(--orange);
    font-size: 4rem;
    line-height: 54px;
    font-weight: 600;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  h3 {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: 300;
  }

  @keyframes main-title {
    0% {
      opacity: 0;
      transform: translate(0px, -20px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;

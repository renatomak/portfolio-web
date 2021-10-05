import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 100%;
    margin-right: 2rem;
    animation-name: photograph;
    animation-duration: 2s;
  }

  @keyframes photograph {
    0% {
      opacity: 0;
      transform: translate(0, 1.2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export const Describe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);

  animation-name: main-title;
  animation-duration: 2s;

  h1,
  h2 {
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
      transform: translate(0px, -1.2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  animation-name: content;
  animation-duration: 2s;

  .title {
    color: var(--orange);
    font-size: 2rem;
  }

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

export default Container;

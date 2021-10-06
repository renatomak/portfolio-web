import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;

  hr {
    width: 50%;
  }

  ul {
    margin-left: 50px;
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default Container;

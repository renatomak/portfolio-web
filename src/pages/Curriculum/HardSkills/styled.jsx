import styled from 'styled-components';

export const Container = styled.div`
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

export const Software = styled.div`
  width: 50%;
  margin-left: 1.2rem;
`;

export const ProgrammingLanguages = styled.div`
  width: 50%;
  margin-right: 1.2rem;
`;

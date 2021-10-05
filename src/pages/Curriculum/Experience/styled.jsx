import styled from "styled-components";

export const CardContainer = styled.div`
  line-height: 2rem;
  margin-top: 2rem;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
   display: block;
   margin: 0;
   margin-bottom: 1rem;
  }
`;

export const CardLeft = styled.div`
  width: 30%;
  color: var(--white);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardRight = styled.div`
  width: 70%;
  .occupation {
    color: var(--orange);
    font-weight: 400;
    font-size: 2rem;
  }

  section {
    margin: 1.2rem;
    text-align: justify;
  }

  ul {
    margin-left: 60px;
  }

  h3 {
    color: var(--grayLite);
  }
  @media (max-width: 600px) {
    width: 100%;
    .occupation {
      font-size: 1.5rem;
    }
  }
`;

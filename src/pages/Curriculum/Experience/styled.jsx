import styled from "styled-components";

export const CardContainer = styled.div`
  line-height: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
   display: block;
   margin: 0;
   margin-bottom: 15px;
  }
`;

export const CardLeft = styled.div`
  width: 30%;
  color: white;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardRight = styled.div`
  width: 70%;
  .funcao {
    color: #f27609;
    font-weight: 400;
    font-size: 2rem;
  }

  article {
    margin: 20px;
    text-align: justify;
  }

  ul {
    margin-left: 60px;
  }

  h3 {
    color: #5c5a5a;
  }
  @media (max-width: 600px) {
    width: 100%;
    .funcao {
      font-size: 1.5rem;
    }
  }
`;

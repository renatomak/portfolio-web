import styled from "styled-components";

export const Article = styled.article`
  width: 70%;
  text-align: justify;
  margin-left: 2rem;
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  line-height: 2.5rem;

  @media (max-width: 600px) {
    #div-contact {
      display: none;
    }
  }
`;











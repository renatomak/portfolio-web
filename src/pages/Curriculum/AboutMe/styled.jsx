import styled from "styled-components";

export const Text = styled.div`
  width: 70%;
  text-align: justify;
  margin-left: 30px;
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    #div-contact {
      display: none;
      background-color: red;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  line-height: 40px;

  @media (max-width: 600px) {
    #div-contact {
      display: none;
      background-color: red;
    }
  }
`;











import styled from "styled-components";

export const Container = styled.div`
  line-height: 50px;

  animation-name: conteudo;
  animation-duration: 2s;

  @keyframes conteudo {
    0% {
      opacity: 0;
      transform: translate(-20px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;
export const Text = styled.div`
  width: 70%;
  text-align: justify;
`;

export const HardSkills = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

  hr {
    width: 50%;
  }

  ul {
    margin-left: 50px;
    line-height: 30px;
  }
`;

export const Software = styled.div`
  width: 50%;
  margin-left: 20px;
`;

export const ProgrammingLanguages = styled.div`
  width: 50%;
  margin-right: 20px;
`;

export const ExperienciaProfissional = styled.div``;

export const Education = styled.div``;

export const CardContainer = styled.div`
  line-height: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CardLeft = styled.div`
  width: 30%;
  color: white;
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
`;

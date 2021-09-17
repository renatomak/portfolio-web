import styled from "styled-components";

export const UlCaminho = styled.ul`
  display: flex;
  list-style: none;
  color: var(--grayLite);
  margin-top: 20px;

  li {
    margin: 5px;
  }

  a {
    color: var(--grayLite);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  
  animation-name: conteudo;
  animation-duration: 2s;

  h1 {
    color: var(--white);
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 30px;
  }

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
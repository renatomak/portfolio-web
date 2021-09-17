import styled from "styled-components";

export const CardImg = styled.div`
  filter: grayscale(0%);
  height: calc(((100vw - (100vw - 900px)) - 20px) / 2.5);
  transition: all 0.7s ease-in-out;

  img {
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    color: #f27609;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  transition: 0.7s;

  /* pega o total de espaço da tela divide por 4 cards e subtrai as margens */
  width: calc(100% / 3 - 20px);

  .text-houver {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
    font-size: 30px;
    height: 100%;
    line-height: 100%;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;

  }

  h1 {
    margin-top: 35%;
  }

  .text-houver:hover {
    opacity: 100%;
  }
`;

export const TextHouver = styled.div``;

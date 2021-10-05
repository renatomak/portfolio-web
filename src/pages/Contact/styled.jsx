import styled from "styled-components";

export const ContatoContainer = styled.div`
  line-height: 50px;

  animation-name: conteudo;
  animation-duration: 2s;
  
  h3 {
    color: var(--orange);
    text-transform: uppercase;
  }

  p {
    color: var(--orangeLite);
    font-weight: 300;
  }

  .social-img {
    margin: 1.2rem;
    font-size: 2rem;
    color: var(--orangeLite);
    transition: .4s;
  }
  .social-img:hover {
    color: var(--orange);
  }

  @keyframes conteudo {
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

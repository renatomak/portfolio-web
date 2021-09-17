import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  img {
    border-radius: 100%;
    margin-right: 30px;
    animation-name: profile-capa;
    animation-duration: 2s;
  }

  @keyframes profile-capa {
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
`;

export const ProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);

  animation-name: titulo-capa;
  animation-duration: 2s;

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 54px;
    font-weight: 400;
  }

  span {
    color: var(--orange);
  }

  h2 {
    margin-top: 30px;
    font-size: 1.3rem;
    font-weight: 300;
  }

  @keyframes titulo-capa {
  0% {
    opacity: 0;
    transform: translate(0px, -20px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
`;

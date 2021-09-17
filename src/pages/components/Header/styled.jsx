import styled from "styled-components";

export const Navigation = styled.div`
  background-color: var(--navBackground);
  color: var(--white);
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  animation-name: navegacao;
  animation-duration: 4s;

  ul {
    list-style: none;
    text-align: right;
    height: 50px;
  }

  li {
    display: inline-block;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 30px;
    font-weight: 100;
    line-height: 50px;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  a:hover {
    color: var(--orange);
  }

  @keyframes navegacao {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.0;
    }
    100% {
      opacity: 1;
    }
  }
`;

import styled from 'styled-components';

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
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ul.active #hamburger {
        border-top-color: transparent;
    }
    ul.active #hamburger::before {
        transform: rotate(135deg);
    }
    ul.active #hamburger::after {
        transform: rotate(-135deg);
        top: -7px;       
    }

  @media (max-width: 1000px) {
    ul {
      display: block;
        position: absolute;
        width: 100%;
        top: 70px;
        right: 0;
        background: #e7e7e7;
        height: 0;
        z-index: 1000;
        transition: .6s;
        visibility: hidden;
        overflow: hidden;
    }
    .active ul {
        height: calc(100vh - 70px);
        visibility: visible;
        overflow-y: auto;
    }
    ul a {
        padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, .05);
    }
  }
`;

export const Hamburger = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  gap: 0.5rem;

  #hamburger {
    border-top: 2px solid yellow;
    width: 20px;
  }
  #hamburger::after, #hamburger::before {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background:yellow;
        margin-top: 5px;
        transition: .3s;
        position: relative;
    }
`;

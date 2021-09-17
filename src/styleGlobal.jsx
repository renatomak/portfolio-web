import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(--background);
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
  }
`;

export const MainContainer = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    .main-title {
      flex-direction: column;
    }
    .profile-pic {
      display: flex;
      justify-content: center;
    }
    .profile-pic img {
      width: 150px;
    }
    .main-title h1 {
      font-size: 1.5rem;
    }
    .main-title h2{
      font-size: 1.2rem;
    }
    .main-title h3 {
      font-size: 0.9rem;
      text-align: center;
    }

  }
`;
 
export default GlobalStyle;
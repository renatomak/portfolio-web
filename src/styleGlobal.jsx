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
`;
 
export default GlobalStyle;
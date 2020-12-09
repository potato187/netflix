import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *::after, *::before, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    color: #333;
    font-size: 16px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-family: inherit;

  }
  
  button {
    cursor: pointer;
  }

  button, input{
    border: 0;
    outline: 0;
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  
`;

export default GlobalStyles;

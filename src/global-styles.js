const { createGlobalStyle } = require("styled-components");

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
`;

export default GlobalStyles;

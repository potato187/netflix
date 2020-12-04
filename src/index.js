import App from "app";
import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "theme/global-styles";
import Provider from "theme/provider";

render(
  <ThemeProvider theme={Provider}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

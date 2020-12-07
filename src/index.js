import App from "app";
import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "theme/global-styles";
import Provider from "theme/provider";

import { firebase } from "lib/firebase.prod";
import { FirebaseContext } from "context/firebase";

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <ThemeProvider theme={Provider}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

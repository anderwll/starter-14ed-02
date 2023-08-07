import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyled from "./config/default/GlobalStyled.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./config/themes/DefaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

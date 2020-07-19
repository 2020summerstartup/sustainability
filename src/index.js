// "The BIG index"
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";

import App from "./App";
import Firebase, { FirebaseContext } from "./services/Firebase";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#24a113",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: "var(--bg-primary)",
      },
      Mui: {
        selected: {
          color: "var(--theme)",
        },
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: "var(--text-primary)",
      },      
    },
  },
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// "The BIG index"
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

const theme = createMuiTheme({
  // overrides: {
  //   MuiButton: {
  //     text: {
  //       color: "white",
  //     },
  //   },
  // },
  palette: {
    primary: {
      main: "#24a113",
    },
    // secondary: {
    //   main: "#0044ff",
    // },
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

import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import useLocalStorage from "../Hooks/useLocalStorage";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#24a113", // green = var(--theme)
    },
    secondary: {
      main: "#E36588", // pink found on coolors = var(--theme-secondary)
      light: "#FFFFFF",
    },
    divider: "rgba(0, 0, 0, 0.04)",
  },
  // overrides for material ui bottom navbar
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: "var(--bg-primary)",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: "var(--text-primary)",
      },
    },
    MuiInputBase: {
      root: {
        color: "#6b6b6b", // darkish grey
      },
    },
  },
});

// DARK THEME!!!
const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#24a113", // green 
    },
    secondary: {
      main: "#E36588", // pink 
    },
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : theme;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};

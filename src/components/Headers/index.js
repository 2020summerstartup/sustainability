import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// AccountHeader imports
import SettingsDrawer from "../../pages/AccountPage/Settings";
import Grid from "@material-ui/core/Grid";

// BackArrowSettingsHeader imports
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

// Makes svg files into React Components
import { ReactComponent as SusLogo } from "../../img/suslogo.svg";
import { ReactComponent as SusLogo1 } from "../../img/logo_skin1.svg";
import { ReactComponent as SusLogo2 } from "../../img/logo_skin2.svg";
import { ReactComponent as SusLogo3 } from "../../img/logo_skin3.svg";
import AudioContextProvider from "../../pages/AccountPage/Settings/audioContext";

// Styles for ALL Headers
const useStyles = makeStyles((theme) => ({
  logo: {
    width: "3rem",
    height: "3rem",
    paddingRight: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  // importing svg as react components caused SusLogo123 to shrink
  logoTooSmall: {
    width: "7rem !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "5.5rem !important",
    },
  },
  logoSignup: {
    width: "3.25rem !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "5rem !important",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    margin: "0",
  },
  // style for title in account header (since it has the settings icon)
  titleSettings: {
    color: "white",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    padding: "0",
    marginTop: "0.5rem",
  },
  // for headers with the back arrow on mobile
  backarrow: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

// Standard Default Header for App (currently not in use but save for later)
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <SusLogo className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            EcoBud
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// HEADERS FOR MAIN PAGES
// HomePage header
const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AudioContextProvider>
        <AppBar position="static">
          <Toolbar>
            <SusLogo3 className={classes.logo} />
            <Typography className={classes.title} variant="h6">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </AudioContextProvider>
    </div>
  );
};

// CompetePage Header
const CompeteHeader = () => {
  const classes = useStyles();
  return (
    <>
    <AudioContextProvider>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <SusLogo1 className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Compete
          </Typography>
        </Toolbar>
      </AppBar>
    </AudioContextProvider>
    </>
  );
};

// AccountPage Header (has settings icon)
const AccountHeader = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container>
            <Grid item style={{ margin: "auto 0", padding: 0, height: "auto" }}>
              <Typography variant="h6" className={classes.titleSettings} noWrap>
                <SusLogo2 className={classes.logo} />
                Profile
              </Typography>
            </Grid>
            <Grid item style={{ margin: "auto 0", padding: 0, height: "auto" }}>
              <SettingsDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

// SPECIAL HEADERS
// Header for SIGNUP PAGE - only need back arrow not settings icon
const BackArrowHeader = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
    <AudioContextProvider>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {/* Back Button using history */}
          <IconButton
            className={classes.buttonIcon}
            onClick={() => history.goBack()}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon className={classes.backarrow} />
          </IconButton>
          <SusLogo2 className={`${classes.logo} ${classes.logoSignup}`} />
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </AudioContextProvider>
    </>
  );
};

// Header for DeleteAccount & ChangeDorm & ForgetPassword & Contact - back arrow & settings icon
const BackArrowSettingsHeader = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
    <AudioContextProvider>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {/* Back Button using history */}
          <IconButton
            onClick={() => history.goBack()}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon className={classes.backarrow} />
          </IconButton>
          <SusLogo1
            className={`${classes.logo} ${classes.logoTooSmall} ${classes.logoWithBackArrow}`}
          />
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                EcoBud
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </AudioContextProvider>
    </>
  );
};

// Header for ChangePassword- Same as BackArrowSettingsHeader but with different skin color logo
const BackArrowSettingsHeader2 = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
    <AudioContextProvider>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {/* Back Button using history */}
          <IconButton
            className={classes.buttonIcon}
            onClick={() => history.goBack()}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon className={classes.backarrow} />
          </IconButton>
          <SusLogo2
            className={`${classes.logo} ${classes.logoTooSmall} ${classes.logoWithBackArrow}`}
          />
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                EcoBud
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </AudioContextProvider>
    </>
  );
};

// Header for InfoPage- Same as BackArrowSettingsHeader but with different skin color logo
const BackArrowSettingsHeader3 = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
    <AudioContextProvider>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {/* Back Button using history */}
          <IconButton
            className={classes.buttonIcon}
            onClick={() => history.goBack()}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon className={classes.backarrow} />
          </IconButton>
          <SusLogo3
            className={`${classes.logo} ${classes.logoTooSmall} ${classes.logoWithBackArrow}`}
          />
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                EcoBud
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </AudioContextProvider>
    </>
  );
};

export {
  HomeHeader,
  CompeteHeader,
  BackArrowSettingsHeader2,
  BackArrowSettingsHeader3,
  AccountHeader,
  BackArrowSettingsHeader,
  BackArrowHeader,
};
export default Header;

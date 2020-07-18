import React, { useState } from "react";
import { withFirebase } from "../../services/Firebase";

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";

// account header imports
import SwipeableTemporaryDrawer from "../../pages/AccountPage/Settings";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

// change dorm/pw imports
// import material ui
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import suslogoImg from "../../img/suslogo.svg";

// Import Tabs
import AccountTabs from "../../pages/AccountPage/AccountTabs";

// imports for homeheader
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

// Styles for Header
const useStyles1 = makeStyles((theme) => ({
  header: {
    background: "primary",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    paddingRight: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    margin: "0",
  },
}));

// Standard Header for App
const Header = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <img src={suslogoImg} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Sus Comp
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// CompeteHeader
const CompeteHeader = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <img src={suslogoImg} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Competitions and Rankings
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// InfoHeader
const InfoHeader = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <img src={suslogoImg} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Information
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Styles for Account Page Header
const useStyles2 = makeStyles((theme) => ({
  header: {
    background: "primary",
    maxHeight: 100,
    padding: 5,
  },
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    padding: "0",
    marginTop: "0.5rem",
  },
  
}));

// Header for account page
const AccountHeader = ({ firebase }) => {
  const classes = useStyles2();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container flexGrow={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                <img src={suslogoImg} alt="logo" className={classes.logo} />
                Profile
              </Typography>
            </Grid>
            <Grid item>
              <SwipeableTemporaryDrawer />
            </Grid>
            {/* <Grid item>
              <AccountTabs/>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <AccountTabs/> */}
    </>
  );
};

// Styles used for Header on Change Password
const useStyles3 = makeStyles((theme) => ({
  header: {
    background: "primary",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginLeft: "0rem",
    marginBottom: "0.5rem",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
  menuButton: {
    marginright: theme.spacing(2),
    textAlign: "left",
    color: "white",
  },
  buttonIcon: {
    paddingLeft: "0",
  },
  backarrow: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
}));

// Header for Change Dorm and Change PW
const ChangeHeader = ({ firebase }) => {
  let history = useHistory();

  const classes = useStyles3();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          {/* Back Button using history */}
          <IconButton
            className={classes.buttonIcon}
            onClick={() => history.goBack()}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon className={classes.backarrow} />
          </IconButton>
          <img src={suslogoImg} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Sus Comp
            {/* <EcoIcon className={classes.leaf} /> */}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyles4 = makeStyles((theme) => ({
  header: {
    background: "primary",
    maxHeight: 100,
    padding: 5,
  },
  root: {
    flexGrow: 1,
  },
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    padding: "0",
    marginTop: "0.5rem",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginTop: "0.4rem",
    borderBottom: "0px !important",
    width: "10rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  inputRoot: {
    color: "inherit",
    top: "0.5rem",
    height: "2.5rem",
    paddingLeft: "2.25rem",
    paddingBottom: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "3rem",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderBottom: "0px !important",
    height: "2rem !important",
    "&:focus": {
      borderBottom: "0px !important",
    },
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HomeHeader = ({ firebase }) => {
  const classes = useStyles4();
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container flexGrow={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                <img src={suslogoImg} alt="logo" className={classes.logo} />
                Home
              </Typography>
            </Grid>
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange={handleSearchChange}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { HomeHeader, CompeteHeader, InfoHeader, AccountHeader, ChangeHeader };
export default withFirebase(Header);

import React from "react";
import { withFirebase } from "../../services/Firebase";

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";

// account header imports
import SwipeableTemporaryDrawer from "../../pages/AccountPage/Settings";
import Grid from "@material-ui/core/Grid";

// change dorm/pw imports
// import material ui
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import suslogoImg from "../../img/suslogo.svg";

// Import Tabs
import AccountTabs from "../../pages/AccountPage/AccountTabs";


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
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: "6.5rem",
    // },
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
            {/* <EcoIcon className={classes.leaf} /> */}
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
    maxHeight: 10,
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
    display: 'inline-flex',
    alignItems: 'center',
    padding: "0",
    marginTop: "0.5rem"
  },
  
}));

// Header for account page
const AccountHeader = ({ firebase }) => {
  const classes = useStyles2();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container flexGrow={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap >
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
      <AccountTabs/>
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
}));


// Header for Change Dorm and Change PW
const ChangeHeader = ({ firebase }) => {
  let history = useHistory();

  const classes = useStyles3();
  return (
    <>
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
          <Typography variant="h6" className={classes.title} noWrap>
            Sustainability Competition
            <EcoIcon className={classes.leaf} />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { AccountHeader, ChangeHeader };
export default withFirebase(Header);

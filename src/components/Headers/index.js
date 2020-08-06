import React from "react";
import { withFirebase } from "../../services/Firebase";

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// account header imports
import SettingsDrawer from "../../pages/AccountPage/Settings";
import Grid from "@material-ui/core/Grid";

// change dorm/pw imports
// import material ui
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

//old way of importing svg files
import suslogoImg from "../../img/suslogo.svg";
// Makes svg files into React Components
import { ReactComponent as SusLogo } from "../../img/suslogo.svg";
import { ReactComponent as SusLogo1 } from "../../img/logo_skin1.svg";
import { ReactComponent as SusLogo2 } from "../../img/logo_skin2.svg";
import { ReactComponent as SusLogo3 } from "../../img/logo_skin3.svg";

// imports for homeheader
import { fade, makeStyles } from "@material-ui/core/styles";
// const suslogoImg = import("../../img/suslogo.svg");

// Styles for Header
const useStyles1 = makeStyles((theme) => ({
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
          <SusLogo className = {classes.logo}/>
          {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
          <Typography variant="h6" className={classes.title} noWrap>
            Sus Comp
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Compete Page Header
const CompeteHeader = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <SusLogo1 className={classes.logo} />
          {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
          <Typography variant="h6" className={classes.title} noWrap>
            Compete
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Admin Page Header
const AdminHeader = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <SusLogo1 className={classes.logo} />
          <Typography variant="h6" className={classes.title} noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Info Page Header
// const InfoHeader = ({ firebase }) => {
//   const classes = useStyles1();
//   return (
//     <>
//       <AppBar position="static" className={classes.header}>
//         <Toolbar className={classes.toolbar}>
//           <SusLogo3 className={classes.logo} />
//           {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
//           <Typography variant="h6" className={classes.title} noWrap>
//             Information
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// Styles for Account Page Header - includes Settings icon
const useStyles2 = makeStyles((theme) => ({
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
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

// Account Page Header - has settings icon
const AccountHeader = ({ firebase }) => {
  const classes = useStyles2();
  return (
    <>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid justify="space-between" container>
            <Grid item style={{ margin: "auto 0", padding: 0, height: "auto" }}>
              <Typography variant="h6" className={classes.title} noWrap>
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

// Styles used for headers with back arrow
const useStyles3 = makeStyles((theme) => ({
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginLeft: "0rem",
    marginBottom: "0.5rem",
    textAlign: "left",
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

// Header for Change Dorm and Change PW - back arrow & settings icon
const BackArrowSettingsHeader = ({ firebase }) => {
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
          {/* <SusLogo1 className={classes.logo}/> */}
          <img src={suslogoImg} alt="logo" className={classes.logo} />
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                Sus Comp
                {/* <EcoIcon className={classes.leaf} /> */}
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
            {/* <Grid item>
              <AccountTabs/>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

const BackArrowSettingsHeader2 = ({ firebase }) => {
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
          <SusLogo2 className={classes.logo}/>
          {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                Sus Comp
                {/* <EcoIcon className={classes.leaf} /> */}
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
            {/* <Grid item>
              <AccountTabs/>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

const BackArrowSettingsHeader3 = ({ firebase }) => {
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
          <SusLogo3 className={classes.logo}/>
          {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                Sus Comp
                {/* <EcoIcon className={classes.leaf} /> */}
              </Typography>
            </Grid>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <SettingsDrawer />
            </Grid>
            {/* <Grid item>
              <AccountTabs/>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
// Header for Signup Page - only need back arrow not settings icon
const BackArrowHeader = ({ firebase }) => {
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
          <SusLogo2 className={classes.logo} />
          {/* <img src={suslogoImg} alt="logo" className={classes.logo} /> */}
          <Grid justify="flex-start" container>
            <Grid item>
              <Typography variant="h6" className={classes.title} noWrap>
                Sus Comp
                {/* <EcoIcon className={classes.leaf} /> */}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Home Page styles
const useStyles4 = makeStyles((theme) => ({
  logo: {
    width: "3rem",
    height: "100%",
    paddingRight: "0.5rem",
    padding: "0",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      marginLeft: "0",
    },
  },
  title: {
    fontWeight: "bold",
    display: "inline",
    marginRight: "2rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      margin: "0",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// Home page header
const HomeHeader = ({ firebase }) => {
  const classes = useStyles4();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SusLogo3 className={classes.logo} />
          <Typography className={classes.title} variant="h6">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export {
  HomeHeader,
  CompeteHeader,
  BackArrowSettingsHeader2,
  BackArrowSettingsHeader3,
  // InfoHeader,
  AccountHeader,
  BackArrowSettingsHeader,
  BackArrowHeader,
  AdminHeader,
};
export default withFirebase(Header);

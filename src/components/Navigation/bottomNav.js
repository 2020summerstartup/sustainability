import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthUserContext } from "../../services/Session";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
// import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EcoIcon from "@material-ui/icons/Eco";
import PersonIcon from "@material-ui/icons/Person";

// users can only see certain pages when nonauthorized/authorized
const BottomNav = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <BottomNavAuth /> : <BottomNavNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      display: "flex",
    },
  },
  selected: {},
}));

function BottomNavAuth() {
  const classes = useStyles();
  const pathname = window.location.pathname;
  
  const tabNameToIndex = (pathname) => {
    if (pathname.includes("home")){
      return 0
    }
    if (pathname.includes("compete")){
      return 1
    }
    if (pathname.includes("profile")){
      return 2
    }
  };
  
  const [value, setValue] = React.useState(tabNameToIndex(pathname));

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      color="primary"
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Compete"
        component={Link}
        to="/compete"
        icon={<EmojiEventsIcon />}
      />
      {/* <BottomNavigationAction
        label="Info"
        component={Link}
        to="/info"
        icon={<InfoIcon />}
      /> */}
      <BottomNavigationAction
        label="Profile"
        component={Link}
        to="/profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}

function BottomNavNonAuth() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      color="primary"
      className={classes.root}
    >
      <BottomNavigationAction
        label="Landing"
        icon={<EcoIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Sign In"
        component={Link}
        to="/signin"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}

export default withRouter(BottomNav);

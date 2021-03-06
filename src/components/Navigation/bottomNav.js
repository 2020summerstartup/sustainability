import React from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EcoIcon from "@material-ui/icons/Eco";
import PersonIcon from "@material-ui/icons/Person";

// users can only see certain pages when nonauthorized/authorized
const BottomNav = () => {
  const pathname = window.location.pathname
  var navigation;
  if (pathname.includes("signin")){
    navigation = <BottomNavNonAuth />
  }else if (pathname.includes("index")){
    navigation = <BottomNavNonAuth />
  }else{
    navigation = <BottomNavAuth />
  }
  return (
  <div>
    {navigation}
  </div>
)};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    // styles for mobile landscape
    [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
      display: "flex",
    },
  },
}));

// BottomNav users that are logged into thier account
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
  
  const pathvalue = tabNameToIndex(pathname) ? tabNameToIndex(pathname) : 0
  const [value, setValue] = React.useState(pathvalue);

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
      <BottomNavigationAction
        label="Profile"
        component={Link}
        to="/profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}

// BottomNav users that are NOT logged into thier account
function BottomNavNonAuth() {
  const classes = useStyles();
  const pathname = window.location.pathname;
  
  const tabNameToIndex = (pathname) => {
    if (pathname.includes("signin")){
      return 1
    }if (pathname.includes("index")){
      return 1
    }else{
      return 0
    }
  };
  
  const pathvalue = tabNameToIndex(pathname) ? tabNameToIndex(pathname) : 0
  const [value, setValue] = React.useState(pathvalue);

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

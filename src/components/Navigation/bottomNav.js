import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 5,
    color: "green",
    "&$selected": {
      color: "red",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  selected: {},
  
}));

export default function BottomNav() {
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
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
        style={{ backgroundColor: "transparent" }}
      />
      <BottomNavigationAction
        label="Compete"
        component={Link}
        to="/compete"
        icon={<GroupIcon />}
        style={{ backgroundColor: "transparent" }}
      />
      <BottomNavigationAction
        label="Info"
        component={Link}
        to="/info"
        icon={<InfoIcon />}
        style={{ backgroundColor: "transparent" }}
      />
      <BottomNavigationAction
        label="Account"
        component={Link}
        to="/account"
        icon={<AccountCircleIcon />}
        style={{ backgroundColor: "transparent" }}
      />
    </BottomNavigation>
  );
}

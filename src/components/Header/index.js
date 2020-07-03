import React from "react";
//import SignOutButton from "../SignOut";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    background: '#00bfa6',
    margin: '0',
    padding: '0',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}></AppBar>
    </>
  );
};

export default Header;

import React from "react";
//import SignOutButton from "../SignOut";
import Typography from '@material-ui/core/Typography';

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#00bfa6",
    height: "3rem",
  },
  title: {
    marginTop: '0.25rem',
    margin: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '7.5rem',
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h6" className={classes.title} noWrap>
          Sustainability Competition App
        </Typography>
      </AppBar>
    </>
  );
};

export default Header;

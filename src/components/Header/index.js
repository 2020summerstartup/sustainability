import React from "react";
//import SignOutButton from "../SignOut";
import Typography from "@material-ui/core/Typography";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOutButton from "../SignOut";

import "./index.css";

// import material ui
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";

import { withFirebase } from '../Firebase';

const useStyles = makeStyles((theme) => ({
  header: {
    background: "primary",
  },
  title: {
    color: "white",
    marginTop: "0.5rem",
    marginLeft: "0rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
}));

const Header = ({ firebase }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} noWrap>
            Sustainability Competition
            <EcoIcon fontSize="medium" className={classes.leaf} />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withFirebase(Header);

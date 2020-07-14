import React from "react";
import { withFirebase } from '../Firebase';


// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";
import SwipeableTemporaryDrawer from './settings.js';
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



const AccountHeader = ({ firebase }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} noWrap>
            Yay
            <EcoIcon className={classes.leaf} />
          </Typography>
          <SwipeableTemporaryDrawer/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withFirebase(AccountHeader);

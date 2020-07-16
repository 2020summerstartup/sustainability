import React from "react";
import { withFirebase } from '../Firebase';
import IconButton from "@material-ui/core/IconButton";
// import material ui
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "primary",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginLeft: "0rem",
    marginBottom: "0.5rem",
    textAlign:"left",
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
        marginLeft: "6.5rem",
      },
  },
}));

const ChangeHeader = ({ firebase }) => {
  let history = useHistory();

  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
            <IconButton className={classes.buttonIcon} onClick={() => history.goBack()} style={{ backgroundColor: "transparent"}}>
                <ArrowBackIcon className={classes.backarrow}/>
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

export default withFirebase(ChangeHeader);

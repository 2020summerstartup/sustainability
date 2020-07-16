import React from "react";
import { withFirebase } from '../../services/Firebase';

// import material ui
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";

// account header imports
import SwipeableTemporaryDrawer from './settings.js';
import Grid from "@material-ui/core/Grid";

// change dorm/pw imports 
// import material ui
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import IconButton from "@material-ui/core/IconButton";


const useStyles1 = makeStyles((theme) => ({
  header: {
    background: "primary",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    margin: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6.5rem",
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
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
      [theme.breakpoints.up("sm")]: {
        marginLeft: "6.5rem",
      },
    },
  }));
  
  
  
const AccountHeader = ({ firebase }) => {
    const classes = useStyles2();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Grid justify="space-between" container spacing={24} flexGrow={1}>
          <Grid item>
            <Typography variant="h6" className={classes.title} noWrap>
              Sustainability Competition
              <EcoIcon className={classes.leaf} />
            </Typography>
          </Grid>
          <Grid item>
            <SwipeableTemporaryDrawer />   
          </Grid>
          </Grid>    
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  
  

const Header = ({ firebase }) => {
  const classes = useStyles1();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} noWrap>
            Sustainability Competition
            <EcoIcon className={classes.leaf} />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};



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

  const classes = useStyles3();
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

// export{withFirebase(ChangeHeader)};


export {AccountHeader, ChangeHeader};
export default withFirebase(Header);

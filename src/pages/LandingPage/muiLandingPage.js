import React from "react";
import welcomeImg from "../../img/welcome.svg";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className="base-container">
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Hello friend!
          </Typography>
          <div className="image">
            <img alt="welcome" src={welcomeImg} />
          </div>
          <Typography component="h1" variant="h6">
            <p>Hey you should sign up to use our awesome app! :) </p>
            <p>Here's just a few reasons why:</p>
          </Typography>
          <Typography component="h1" variant="body1">
            <ul>
              <li>It's made by the coolest people ever! 😎</li>
              <li>You want to be more sustainable! 🌎</li>
              <li>You have competitive fire within you! 🔥</li>
              <li>You don't want to let your dorm down. 🏫</li>
            </ul>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;

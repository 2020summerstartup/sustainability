import React from "react";
import offlineImg from "../../img/offline.svg";

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

function OfflinePage() {
  const classes = useStyles();

  return (
  <div className="base-container">
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Oops! Sorry you're offline.
        </Typography>
        <div className="image">
          <img alt="offline" src={offlineImg} />
        </div>
        <Typography component="h1" variant="h6">
          <p>Please come back when you have connection! :)</p>
          <p>Here's why you should come back later:</p>
        </Typography>
        <Typography component="h1" variant="body1">
          <ul>
            <li>Our app is made by the coolest people ever!&nbsp;
              <span role="img" aria-label="sunglasses">
                😎
              </span>
            </li>
            <li>You want to be more sustainable!&nbsp;
              <span role="img" aria-label="earth">
                🌎
              </span>
            </li>
            <li>You have competitive fire within you!&nbsp;
              <span role="img" aria-label="fire">
              🔥
              </span>
            </li>
            <li>You don't want to let your dorm down.&nbsp;
              <span role="img" aria-label="dorm">
                🏫
              </span>
            </li>
          </ul>
        </Typography>
      </div>
    </Container>
  </div>
)};

export default OfflinePage;

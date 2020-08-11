import React from "react";
import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// Displays text for total logs based on total actions logged
var totalBuzzText;
const totalBuzzDisplay = () => {
  if (JSON.parse(localStorage.getItem("buzzes")) === 1) {
    totalBuzzText = <Typography variant="h5">Action Logged!</Typography>;
  } else {
    totalBuzzText = <Typography variant="h5">Actions Logged!</Typography>;
  }
};
totalBuzzDisplay();

// Cards to be rendered on the points page in profile
class TotalBuzz extends React.Component {
  render() {
    return (
      <div className={styles.bannerShape}>
        <Grid
          container
          justify="center"
          style={{ placeItems: "center", marginBottom: "0.5rem" }}
        >
          <Typography
            variant="h3"
            style={{ marginRight: "1rem" }}
          >
            <b>{localStorage.getItem("buzzes")}</b>
          </Typography>
          {totalBuzzText}
          <Grid container justify="center">
            <Typography variant="body2">
              Click impact cards below for a fun surprise!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TotalBuzz;

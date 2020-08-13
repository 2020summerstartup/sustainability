// commented by JM
import React from "react";
import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Displays text for total logs based on total actions logged --> plural vs. singular action(s)
var totalBuzzText; // defining a global variable to be set in the function & called in the render
const totalBuzzDisplay = () => {
  if (JSON.parse(localStorage.getItem("buzzes")) === 1) { // if only one action logged --> action
    totalBuzzText = <Typography variant="h5">Action Logged!</Typography>;
  } else { // if many actions logged --> actions
    totalBuzzText = <Typography variant="h5">Actions Logged!</Typography>;
  }
};
totalBuzzDisplay(); // call function to make sure that it runs & sets totalBuzzText to display properly 

// Cards to be rendered on the points page in profile
// TotalBuzz class is called to display on points tab of account page
class TotalBuzz extends React.Component {
  render() {
    return (
      <div className={styles.bannerShape}>
        <Grid
          container
          justify="center"
          style={{ placeItems: "center", marginBottom: "0.5rem" }}
        >
          <Typography variant="h3" style={{ marginRight: "1rem" }}>
            <b>{localStorage.getItem("buzzes")}</b>
          </Typography>
          {totalBuzzText} 
          <Grid container justify="center">
            <Typography
              variant="body2"
              style={{ textShadow: "2px 2px 3px black" }}
            >
              Click the impact cards below for a fun surprise!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TotalBuzz;

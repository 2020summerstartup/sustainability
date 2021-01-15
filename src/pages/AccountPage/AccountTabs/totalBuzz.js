// commented by JM
import React from "react";
import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Displays text for total logs based on total actions logged --> plural vs. singular action(s)
var totalBuzzText; // defining a global variable to be set in the function & called in the render
const totalBuzzDisplay = () => {
  var buzzes = localStorage.getItem('buzzes');
  if(buzzes && buzzes !== 'undefined') { // if buzzes is defined
  if (JSON.parse(buzzes) === 1) {
    // if only one action logged --> action
    totalBuzzText = <Typography variant="h5"><b>1</b> Action Logged!</Typography>;
  } else {
    // if many actions logged --> actions
    totalBuzzText = <Typography variant="h5"><b>{buzzes}</b> Actions Logged!</Typography>;
  }
} else {
  totalBuzzText = <Typography variant="h5"> No Actions Logged Yet.</Typography>;
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

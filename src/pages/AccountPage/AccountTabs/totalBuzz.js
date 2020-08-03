import React from "react";
import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  //   borderBottom: {
  //     "&:after": {
  //       borderBottom: theme.palette.background.paper,
  //       //   borderBottom: "13px solid",
  //     },
  //   },
});

// cards to be rendered on the points page in account
class TotalBuzz extends React.Component {
  render() {
    // Following line was unused so I commented it out -Katie
    //const { classes } = this.props;

    return (
      // <Spring
      //   from={{ opacity: 0, marginTop: -1200 }}
      //   to={{ opacity: 1, marginTop: 0 }}
      //   config={{ delay: 0, duration: 2000 }}
      // >
      //   {(props) => (
      //     <div style={props}>
      //       <div className="InfoCards">
      //         <div className="cards">
      <div className={styles.bannerShape}>
        <Grid
          container
          justify="center"
          style={{ placeItems: "center", marginBottom: "0.5rem"}}
        >
          <Typography
            variant="h3"
            component="h1"
            style={{ marginRight: "1rem" }}
          >
            {localStorage.getItem("buzzes")}
          </Typography>
          <Typography variant="h5">Action(s) Logged!</Typography>
          <Grid container justify="center">
            <Typography variant="body2">
              Click impact cards below for a fun surprise!
            </Typography>
          </Grid>
        </Grid>
      </div>
      //         </div>
      //       </div>
      // </div>
      //   )}
      // </Spring>
    );
  }
}

export default withStyles(useStyles)(TotalBuzz);

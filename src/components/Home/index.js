import React from "react";
import Counter from "./counter";

import ActionCard from "../ActionCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { withAuthorization } from "../Session";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  actionContainer: {
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className="base-container">
      <script>var user =</script>
      <h1>Home Page</h1>
      <div className={classes.root}>
        <Grid container spacing={4} className={classes.actionContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionCard />
          </Grid>
        </Grid>
      </div>
      {/* <h3>Home Sweet Home</h3>
    <span role="img" aria-label="burger, recycle">🍔 ♻️</span>
    <h3>Recycle Water Bottle</h3>
    <center><Counter/></center>
    <h3>Walk to Claremont Village</h3>
    <center><Counter/></center> */}
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);

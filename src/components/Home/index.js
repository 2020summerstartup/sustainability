import React, { useState } from "react";
import Counter from "./counter";

import ActionCard from "../ActionCard";
import ActionsData from "../ActionsData"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { withAuthorization } from "../Session";

const useStyles = makeStyles({
  actionContainer: {
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const HomePage = () => {
  const classes = useStyles();
  const [actionData, setActionData] = useState(ActionsData);

  return (
    <div className="base-container">
      <script>var user =</script>
      <h1>Home Page</h1>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.actionContainer}>
          <Grid item xs={12} md={6} lg={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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

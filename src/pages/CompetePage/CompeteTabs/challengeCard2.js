import React from "react";
import Reward from "react-rewards";
import ChallengeData from "../challengeData.json";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import challenges from "../../../img/challenges.svg";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    alignContent: "center",
    background:
      "linear-gradient(to right, #BF953F, #FCF6BA, #B38728,#FBF5B7, #AA771C)",
    // maxWidth: 600,
    // maxHeight: 500,
    height: "100%",
    margin: 0,
    // minHeight: "300",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    display: "flex",
    minWidth: "50%",
    minHeight: "100%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      minHeight: "60%",
    },
    [theme.breakpoints.up(475)]: {
      minHeight: "80%",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "100%",
      minWidth: "40%",
    },
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 60,
    fontSize: 20,
  },
  buttonBigScreen: {
    backgroundColor: "hsla(40, 50%, 50%, 1)",
    // backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonSmallScreen: {
    display: "inline",
    backgroundColor: "hsla(40, 50%, 50%, 1)",
    // backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

function notify() {
  toast("Saved to do later", {
    position: "top-right",
  });
}

class ChallengeCard2 extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h5">Challenges</Typography>
        <Grid
          container
          justify="center"
          spacing={3}
          style={{ marginTop: "0.5rem" }}
        >
          {ChallengeData.map((challenge, i) => (
            <Grid item xs={12} lg={6} key={i}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" gutterBottom>
                      {challenge.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {challenge.info}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <IconButton aria-label="previous" onClick={notify}>
                      <StarIcon />
                    </IconButton>
                    {/* REWARD HAS THE SAME ISSUES AS IMPACT CARD- ONLY LAST ITEM IN MAP FUNCTION IS REWARDED */}
                    {/* <Reward
                      ref={(ref) => {
                        this.reward = ref;
                      }}
                      type="emoji"
                      config={{
                        springAnimation: true,
                        elementCount: 100,
                      }}
                    > */}
                    <Button
                      variant="contained"
                      // color="secondary"
                      className={classes.buttonBigScreen}
                      onClick={() => this.reward.rewardMe()}
                    >
                      Start Challenge!
                    </Button>
                    <Button
                      variant="contained"
                      // color="secondary"
                      className={classes.buttonSmallScreen}
                      onClick={() => this.reward.rewardMe()}
                    >
                      Start!
                    </Button>
                    {/* </Reward> */}
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={challenges}
                  title={challenge.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(ChallengeCard2);

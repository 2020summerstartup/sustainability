import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import challengeData from "./challengeData.json";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    background:
      "linear-gradient(to right, #BF953F, #FCF6BA, #B38728,#FBF5B7, #AA771C)",
    height: "100%",
    // maxWidth: "30rem",
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
    border: "none",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    root2: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
});

function notify() {
  toast("Saved to do later", {
    position: "top-right",
  });
}

// THIS IS NOT CURRENTLY IN USE BUT WOULD BE USED IF WE WANT TO GIVE ADMIN CHALLENGE ADDING PRIVELEGES
// It will get the challenge data from local storage which we can then use to display the challenges on the page
// var data = localStorage.getItem('challengeData');
// console.log('data', data);
// // convert challenge data from string to object
// var challengeData = JSON.parse(data)

class ChallengeCards extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <Grid
          container
          justify="center"
          spacing={3}
          style={{ marginTop: "0.5rem" }}
        >
          {challengeData.map((challenge, id) => (
            <Grid item xs={12} lg={6} key={id}>
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
                    <Button
                      variant="contained"
                      className={classes.buttonBigScreen}
                    >
                      Start Challenge!
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.buttonSmallScreen}
                    >
                      Start!
                    </Button>
                  </div>
                </div>
                <CardMedia
                  component="img"
                  className={classes.cover}
                  image={challenge.picture}
                  title={challenge.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
    );
  }
}

export default withStyles(useStyles)(ChallengeCards);

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";
import styles from "./badge3.module.css";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // display: "flex",
  //   backgroundColor: theme.palette.divider,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  // },
  details: {
    display: "flex",
    // margin: "auto",
    margin: "6px",
    marginBottom: 0,
    backgroundColor: "#777",
    color: "white",
  },
  avatar: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(9),
    height: theme.spacing(9),
    border: "3px solid white",
    margin: "auto",
    marginRight: "1rem",
  },
  content: {
    // flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginLeft: 0,
  },
  cover: {
    width: "100%",
  },
  buzzTimes: {
    marginTop: "0.5rem",
    color: "white",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={styles.root}>
      <div className={classes.details}>
        <Avatar className={classes.avatar}>
          <EcoIcon fontSize="large" />
        </Avatar>
        <CardContent className={classes.content}>
          <Typography variant="h5">Earth Day Badge</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.buzzTimes}
          >
            Buzzed 20 times!
          </Typography>
        </CardContent>
      </div>
      {/* <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Earth Day"
      />  */}
    </Card>
  );
}

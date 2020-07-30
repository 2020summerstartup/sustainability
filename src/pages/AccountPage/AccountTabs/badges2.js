import React from "react";
import styles from "./badges2.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    // width: 151,
    width: "100%",
  },
  buzzTimes: {
    marginTop: "1rem",
  },
  avatar: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: "3px solid white",
    margin: "auto",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.leaves}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className={styles.column}>
        <div className={styles.left}>
          <Typography variant="h6" className={styles.titleLeft}>
            Recyling Badge
          </Typography>
        </div>
        <div className={styles.right}>
          <Typography variant="h6" className={styles.titleRight}>
            Cleaning Badge
          </Typography>
        </div>
        <div className={styles.left}>
          <Typography variant="h6" className={styles.titleLeft}>
            Gardening Badge
          </Typography>
        </div>
        <div className={styles.right}>
          <Typography variant="h6" className={styles.titleRight}>
            No Waste Badge
          </Typography>
        </div>
      </div>
    </div>
    // <Card className={classes.root}>
    //   <div className={classes.details}>
    //     <CardContent className={classes.content}>
    //       <Typography variant="h5">
    //         Earth Day Badge
    //       </Typography>
    //       <Typography variant="subtitle1" color="textSecondary" className={classes.buzzTimes}>
    //         Buzzed 20 times!
    //       </Typography>
    //     </CardContent>
    //   </div>
    //   <CardMedia
    //     className={classes.cover}
    //     image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    //     title="Earth Day"
    //   />
    // </Card>
  );
}

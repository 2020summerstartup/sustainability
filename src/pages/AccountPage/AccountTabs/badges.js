import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "50%",
    backgroundColor: theme.palette.divider,
    minHeight: "10rem",
    textAlign: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem !important",
    paddingLeft: "25%",
    paddingRight: "1rem",
  },
  cover: {
    width: "50%",
  },
  buzzTimes: {
    marginTop: "0.5rem",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5">Green Thumb Badge</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.buzzTimes}
          >
            Buzzed 25 times!
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1555955207-b96159c16808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Earth Day"
      />
    </Card>
  );
}

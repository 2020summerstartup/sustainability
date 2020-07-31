import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import challenges from "../../../img/challenges.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyItems: 'center',
    justifyContent: "center",
    alignContent: "center",
    background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728,#FBF5B7, #AA771C)',
    maxWidth: 600,
    maxHeight: 500,
    // minHeight: "300",

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    // alignItems: 'start',
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 60,
    fontSize: 20,
  },
  button: {
    backgroundColor: "hsla(40, 50%, 50%, 1)",
    // backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: 16,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  // const theme = useTheme();


  function Notify() {
    toast("Saved to do later", {
        position: "top-right"
    });
}

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Zero Food Waste Challenge
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Don't waste any food all week
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous" onClick={Notify}>
            <FavoriteIcon />
          </IconButton>
          <button className={classes.button}>
        
                Start challenge!

          {/* <IconButton className={classes.button}>
            <p >
                Start challenge!
            </p> */}
          </button>
          {/* <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={challenges}
        title="Food Challenge"
      />
    </Card>
  );
}

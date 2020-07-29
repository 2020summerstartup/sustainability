import React from "react";
import styles from "./badgeModal.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { ReactComponent as BadgeLogo } from "../../img/badge.svg";

// import badgeImg from "../../img/badge.svg";
import badge from "../../sounds/hero_simple-celebration-01.wav";

const useStyles = makeStyles((theme) => ({
  buttonModal: {
    marginTop: theme.spacing(2),
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  textTitle: {
    color: "black",
  },
  badgeImg: {
    width: "50%",
    height: "50%",
    margin: "1rem",
  },
  textBody: {
    color: "black",
  },
  buttonClose: {
    marginTop: theme.spacing(2),
  },
}));

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    playSound(badgeAudio);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // sound play for certain buttons
  const badgeAudio = new Audio(badge);

  // called by onclick to play the audio file
  const playSound = (audioFile) => {
    audioFile.play();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={classes.buttonModal}
      >
        You earned a badge!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* NOTE: dialogContent is styles in module.css, background wouldn't work otherwise */}
        <DialogContent className={styles.dialogContent}>
          <DialogContentText id="alert-dialog-description">
            {/* RIBBON */}
            <div className={styles.nonSemanticProtector}>
              <h1 className={styles.ribbon}>
                <strong className={styles.ribbonContent}>
                  Congratulations {localStorage.getItem('name')}!
                </strong>
              </h1>
            </div>
            {/* <Typography variant="h5" className={classes.textTitle}>
              Congratulations [user's name]!
            </Typography> */}
            {/* <Typography variant="subtitle" className={classes.textBody}>
              You just earned a new badge for completing [susaction]! This means
              you have completed this action 20 times. Great job and keep being
              sustainable!
            </Typography> */}
          </DialogContentText>
          <BadgeLogo className={classes.badgeImg} />
          {/* <img alt="badge" src={badgeImg} className={classes.badgeImg} /> */}
          {/* MUST ATTRIBUTE AUTHOR */}
          <DialogContentText id="alert-dialog-description">
            {/* <Typography variant="h5">Congratulations [user's name]!</Typography> */}
            <Typography variant="subtitle" className={classes.textBody}>
              You just earned a new badge for completing [susaction]! This means
              you have completed this action 20 times. Great job and keep being
              sustainable!
            </Typography>
          </DialogContentText>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            autoFocus
            className={classes.buttonClose}
          >
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

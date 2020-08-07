import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import AlertDialog from "./badgeModal";
import styles from "./modal.module.css";
// import { ReactComponent as DarkLogo } from "../../img/darkMode.png";
import DarkLogo from "../../img/darkMode.png"; 
import { DarkModeOpened } from "../../services/Firebase"; 

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

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
    fontWeight: "bold",
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

// localStorage.setItem("pop_done", false);

export default function DarkModeModal() {

  const [visible, setVisible] = useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   playSound(badgeAudio);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // sound play for certain buttons
  const badgeAudio = new Audio(badge);

  // called by onclick to play the audio file
  const playSound = (audioFile) => {
    audioFile.play();
  };

  useEffect(() => {
    let darkPop_done = JSON.parse(localStorage.getItem('darkPop_done'));
    let email = localStorage.getItem('email');
    if (!darkPop_done ) {
      setVisible(true);
      playSound(badgeAudio);
      DarkModeOpened(email);
    }
  }, [])
  if (!visible) return null;

  return (
    <div>
      <div id="badgewindow">
        {/* <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            className={classes.buttonModal}
          >
            You earned a badge!
          </Button> */}
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
                    Hey our sustainable buddy, {localStorage.getItem('name')}!
                    </strong>
                </h1>
              </div>
            </DialogContentText>
            <img alt="dark logo" src={DarkLogo} className={classes.badgeImg}/>
            {/* <DarkLogo className={classes.badgeImg} /> */}
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body1" className={classes.textTitle}>Make sure you checkout our cool feature! </Typography>
              <Typography variant="body2" className={classes.textBody}>
                You can now switch from Light Mode to Dark Mode! Just click on the settings icons in the upper right corner.
                </Typography>
            </DialogContentText>
            <Button
              onClick={() => { handleClose(); setVisible(false); }}
              variant="contained"
              color="secondary"
              autoFocus
              className={classes.buttonClose}
            >
              Got it
              </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
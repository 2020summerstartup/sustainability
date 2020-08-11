import React, { useState, useEffect } from "react";
import styles from "../../HomePage/modal.module.css";
import { ReactComponent as DarkLightModeImg } from "../../../img/darklightmode.svg";
import { DarkModeOpened } from "../../../services/Firebase";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

// sound is called badge because it plays the same sound as when badge modal is opened
import badge from "../../../sounds/hero_simple-celebration-01.wav";

const useStyles = makeStyles((theme) => ({
  buttonModal: {
    marginTop: theme.spacing(2),
  },
  dialogTitle: {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 3px black",
  },
  darkModeImg: {
    width: "40%",
    height: "40%",
    margin: "0.25rem",
    marginBottom: "0.5rem",
  },
  textBody: {
    color: "black",
    fontWeight: "bold",
  },
  buttonClose: {
    marginTop: theme.spacing(2),
  },
}));

export default function DarkModeModal() {
  const [visible, setVisible] = useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
    let darkPop_done = JSON.parse(localStorage.getItem("darkPop_done"));
    let email = localStorage.getItem('email');
    if (!darkPop_done) {
      setVisible(true);
      playSound(badgeAudio);
      DarkModeOpened(email);
    }
  }, [badgeAudio]);
  if (!visible) return null;

  return (
    <div id="badgewindow">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* NOTE: dialogContent is styles in module.module.css, background wouldn't work otherwise */}
        <DialogContent className={styles.dialogContentDarkMode}>
          <DialogContentText>
            <Typography variant="h5" className={classes.dialogTitle}>
              Hey our sustainable buddy, {localStorage.getItem("name")}!
            </Typography>
            <Typography
              variant="h6"
              component={"span"}
              className={classes.dialogTitle}
            >
              Make sure you check out our cool feature!{" "}
            </Typography>
          </DialogContentText>
          <DarkLightModeImg className={classes.darkModeImg} />
          <DialogContentText id="alert-dialog-description">
            <Typography
              variant="body1"
              component={"span"}
              className={classes.textBody}
            >
              You can now use our EcoBud app in Dark Mode! Tap on the settings
              icon in the upper right corner on your Profile page, then go to
              "Light Mode" to change to "Dark Mode"!
            </Typography>
          </DialogContentText>
          <Button
            onClick={() => {
              handleClose();
              setVisible(false);
            }}
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
  );
}

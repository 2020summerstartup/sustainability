import React, { useState, useEffect } from "react";
import styles from "../HomePage/modal.module.css";
import { AddHomeOpened } from "../../services/Firebase";
import addHomeGif from "../../img/addToHome.GIF";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import badge from "../../sounds/hero_simple-celebration-01.wav";

// Styles for AddHome Modal
const useStyles = makeStyles((theme) => ({
  textTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  addHomeImg: {
    width: "40%",
    height: "40%",
    position: "relative",
    left: "50%",
    transform: "translate(-50%, 0)",
  },
  textEntireBody: {
    color: "white",
    marginTop: "1rem",
  },
  textBody: {
    color: "white",
    margin: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  buttonClose: {
    margin: "1rem auto",
    display: "flex",
  },
}));

// Main Component - used to prompt users about dark mode
export default function DarkModeModal() {
  const classes = useStyles();
  // Visibility of modal
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = React.useState(true);

  // Clicking close button on modal, makes the modal no longer visible
  const handleClose = () => {
    setOpen(false);
  };

  // sound for when badge modal is opened
  const badgeAudio = new Audio(badge);

  // called by onclick to play the audio file
  const playSound = (audioFile) => {
    audioFile.play();
  };
  // Ran to display modal only if user has never seen it before
  useEffect(() => {
    let addHomePop_done = JSON.parse(localStorage.getItem("addHomePop_done"));
    let email = localStorage.getItem("email");
    if (!addHomePop_done) {
      // Displays modal and plays sound when it opens
      setVisible(true);
      playSound(badgeAudio);
      // Tells firebase the action has been done
      AddHomeOpened(email);
    }
  }, [badgeAudio]);
  // Otherwise, does nothing
  if (!visible) return null;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* NOTE: dialogContent is styles in module.css to display the animated gradient background */}
        <DialogContent className={styles.dialogContentAddHome}>
            <Typography variant="h5" className={classes.textTitle}>
              Hey {localStorage.getItem("name")}! Make sure you add our app to
              your homescreen!
            </Typography>
          <img
            alt="dark logo"
            src={addHomeGif}
            className={classes.addHomeImg}
          />
            <Typography variant="body2" className={classes.textBody}>
              <strong>For IOS devices: </strong> Make sure you're on Safari and
              then tap the Share button at the bottom of your screen. Then tap
              on the "Add to Home Screen" button and our app will appear!
            </Typography>
            <Typography variant="body2" className={classes.textBody}>
              <strong>For Andriod devices: </strong>In Chrome, go to Settings in
              the rop right corner, then slide down and tap "Add to Home
              Screen".
            </Typography>
          <Button
            onClick={() => {
              handleClose();
              setVisible(false);
            }}
            variant="contained"
            color="secondary"
            autoFocus
            className={`${classes.buttonClose} ${styles.buttonBackground}`}
          >
            Got it!
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

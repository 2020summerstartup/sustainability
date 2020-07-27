import React from "react";
//  import * as firebase from 'firebase';
import { withFirebase } from "../../services/Firebase";

import Button from "@material-ui/core/Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sounds
import toastNotify from "../../sounds/notification_simple-01.wav";

// sound play for favorites button
const toastAudio = new Audio(toastNotify);

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};

// This function is the one that is called when the user presses the sign out button. If they confirm that
// they meant to, then this fucntion calls sign out.
const confirmSignOut = ({ firebase }) => {
  var confirmed = window.confirm("Are you sure you want to sign out?"); // Check with the user
  if (confirmed === true) {
    firebase.doSignOut();
    toast.configure(); // Configure for toast messages later
    toast.info("You have signed out. Come back soon!"); // Can play with colors here if anyone wants to. :)
  }
};

const SignOutButton = ({ firebase }) => (
  <Button
    onClick={() => {
      confirmSignOut({ firebase });
      playSound(toastAudio);
    }}
    variant="contained"
    color="primary"
    className="signout-btn button"
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);

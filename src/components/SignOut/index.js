import React, { useContext } from "react";
import { withFirebase } from "../../services/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { audioContext } from "../../pages/AccountPage/Settings/audioContext" 
import "../../pages/HomePage/toastify.css";

import Button from "@material-ui/core/Button";

// Sounds
import toastNotify from "../../sounds/notification_simple-01.wav";
// import { wait } from "@testing-library/react";

// sound play for favorites button
const toastAudio = new Audio(toastNotify);

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};


// This function is the one that is called when the user presses the sign out button. If they confirm that
// they meant to, then this fucntion calls sign out.

async function confirmSignOut ({ audio, firebase }) {
  var confirmed = window.confirm("Are you sure you want to sign out?"); // Check with the user
  if (confirmed === true) {
    window.location.href = "/signin"
    firebase.doSignOut();
    // I DON'T KNOW IF THESE LINES ARE ACTUALLY BEING CALLED
    toast.configure(); // Configure for toast messages
    toast.info("You have signed out. Come back soon!"); // Can play with colors here if anyone wants to. :)
    if (audio.unmute){
      console.log("play")
      playSound(toastAudio)
    };
    localStorage.clear(); // Wipe the local storage
  }
};

function SignOutButton ({ firebase }) {
  const audio = useContext(audioContext)
  return (
  <Button
    onClick={() => confirmSignOut({ audio, firebase })}
    variant="contained"
    color="primary"
    className="signout-btn button"
  >
    Sign Out
  </Button>
)};

export default withFirebase(SignOutButton);

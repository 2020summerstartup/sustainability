import React from "react";
import styles from "./infoCards.module.css";

import Typography from "@material-ui/core/Typography";

// this is the last of the info cards
class AddToHomeScreen extends React.Component {
  render() {
    return (
      <div className={`${styles.cardWrapper} ${styles.gradientBg}`}>
        {/* CORNER RIBBON */}
        <div className={styles.cornerRibbon}>
          <span>Special!</span>
        </div>
        <Typography variant="h5" style={{ fontWeight: "bold" }} gutterBottom>
          Add App to <br /> Your Home Screen!
        </Typography>
        <Typography variant="body2">
          <strong>For IOS devices: </strong>Make sure you're on Safari and then tap the Share
          button at the bottom of your screen. Then tap on the "Add to Home
          Screen" button, and our app will appear!
        </Typography>
        <Typography variant="body2">
          <strong>For Andriod devices: </strong>In Chrome, go to Settings in the rop right
          corner, then slide down and tap "Add to Home Screen".
        </Typography>
      </div>
    );
  }
}

export default AddToHomeScreen;

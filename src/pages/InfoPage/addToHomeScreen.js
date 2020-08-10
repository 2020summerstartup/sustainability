import React from "react";
import styles from "./addToHomeScreen.module.css";

class AddToHomeScreen extends React.Component {
  render() {
    return (
      <div
        className={styles.cardWrapper}
      >
        <div className={styles.ribbon}>
          <span>Special!</span>
        </div>
        <h1 className="card-name">
          Add App to <br /> Your Home Screen!
        </h1>
        <p className="card-description">
          For IOS devices: Make sure you're on Safari and then tap the Share
          button at the bottom of your screen. Then tap on the "Add to Home
          Screen" button and our app will appear!
        </p>
        <p className="card-description">
          For Andriod devices: In Chrome, go to Settings in the rop right
          corner, then slide down and tap "Add to Home Screen".
        </p>
      </div>
    );
  }
}

export default AddToHomeScreen;

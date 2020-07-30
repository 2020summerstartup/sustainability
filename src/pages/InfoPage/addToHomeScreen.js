import React from "react";
import styles from "./addToHomeScreen.module.css";

class AddToHomeScreen extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "1.5rem",
          borderRadius: "10px",
          margin: "0 0.5rem",
          maxWidth: "600px",
          marginTop: "2rem",
          position: "relative",
        }}
        // className={styles.cardWrapper}
      >
        <div className={styles.ribbon}>
          <span>Special!</span>
        </div>
        <h1 className="card-name">Add App to <br/> Your Home Screen!</h1>
        <p className="card-description">
          For IOS devices: Press the "Share Icon" at the bottom of your Safair browswer, then press the "Add to Homescreen" button.
        </p>
        <p className="card-description">
          For Andriod devices: [idk I have an iPhone sorry].
        </p>
      </div>
    );
  }
}

export default AddToHomeScreen;

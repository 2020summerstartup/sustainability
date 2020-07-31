import React from "react";
import styles from "./addToHomeScreen.module.css";
// import spectrum1 from "../../img/spectrum1.svg";
// import spectrum2 from "../../img/spectrum2.svg";
import spectrum3 from "../../img/spectrum3.svg";
// import spectrum4 from "../../img/spectrum4.svg";


class AddToHomeScreen extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${spectrum3})`,
          backgroundSize: "cover",
          // backgroundColor: "orange",
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

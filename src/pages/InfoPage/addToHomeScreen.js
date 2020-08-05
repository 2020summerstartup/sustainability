import React from "react";
import styles from "./addToHomeScreen.module.css";
// import spectrum1 from "../../img/spectrum1.svg";
// import spectrum2 from "../../img/spectrum2.svg";
// import spectrum3 from "../../img/spectrum3.svg";
// import spectrum4 from "../../img/spectrum4.svg";

class AddToHomeScreen extends React.Component {
  render() {
    return (
      <div
        // style={{
        //   // backgroundImage: `url(${spectrum3})`,
        //   backgroundSize: "cover",
        //   background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        //   animation: "gradient 15s ease infinite",
        //   color: "white",
        //   padding: "1.5rem",
        //   borderRadius: "10px",
        //   margin: "0 0.5rem",
        //   maxWidth: "600px",
        //   marginTop: "2rem",
        //   position: "relative",
        // }}
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

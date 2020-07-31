import React from "react";
import styles from "./pwa.module.css";
// list of colors for each dorm to display in a different color depending on their ranking
// I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
// let colors = [rgb(139,139,139)];

function PwaCard() {
  return (
    <div>
      <div className="InfoCards">
        <div className="cards">
          <div className={styles.cardStyle}>
            <h1 className="card-name">
              Add our app to your home screen!
                    </h1>
            <p className="card-description">
              Go green or go home is a progressive web app, simply press
                      </p>
            <p style={{ textSize: "15px", fontWeight: "bold" }}>Add to Home Screen</p>
            <p>
              on your mobile device in a browser to download, no need to go to the app store!
                    </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PwaCard;

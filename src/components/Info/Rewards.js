import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default function Rewards() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 3000, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>Current Rewards</h1>
            <p>Coming soon... :)</p>
            <p>Funded by ASHMC Sustainability and ESW!</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const goal = {
  // I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
  background: "#155d0b",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  margin: "0 1.5rem",
};
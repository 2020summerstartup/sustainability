import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

const goal = {
  background: "#00bf96",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
};

export default function Points() {
  return (
    <Spring from={{ opacity: 0 }} from={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>How to Participate & Earn Points</h1>
            <p>
              Sign up with your HMC gmail! Look on our actions page for
              sustainable practices that you can earn points for and hit the
              "BUZZ" button everytime you complete the action!
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

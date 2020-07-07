import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

const goal = {
  background: "#00bfb6",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
};

export default function Challenges() {
  return (
    <Spring from={{ opacity: 0 }} from={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>Current Challenges</h1>
            <p>Coming soon... :)</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

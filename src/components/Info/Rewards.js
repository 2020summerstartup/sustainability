import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

const goal = {
  background: "#00a8bf",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
};

export default function Rewards() {
  return (
    <Spring from={{ opacity: 0 }} from={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>Current Rewards</h1>
            <p>Coming soon... :)</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

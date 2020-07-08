import React, { useState } from "react";
import "./index.css";

import Select from "react-select";

// Choose your dorm!
const dorms = [
  {
    value: 1,
    label: "Atwood",
    // isDisabled: true,
  },
  {
    value: 2,
    label: "Case",
  },
  {
    value: 3,
    label: "Drinkward",
  },
  {
    value: 4,
    label: "East",
  },
  {
    value: 5,
    label: "Linde",
    // isDisabled: true,
  },
  {
    value: 6,
    label: "North",
  },
  {
    value: 7,
    label: "Sontag",
  },
  {
    value: 8,
    label: "South",
  },
  {
    value: 9,
    label: "West",
  },
];

function Dropdown2() {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (obj) => {
    setSelectedValue(obj.label.replace(/"([^"]+)":/g, "$1:"));
    // the .replace was supposed to get rid of quotes but it didn't work
  };

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      backgroundColor: state.isSelected ? "#00bfa6" : "white",
      borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    
      "&:hover": {
        color: state.isDisabled ? "lightgrey" : "black",
        fontWeight: state.isFocused ? "bold" : "normal",
        backgroundColor: state.isDisabled ? "white" : "#00bfa6",
      },
    }),
    control: (styles, state) => ({
      ...styles,
      boxShadow: state.isFocused ? "0 0 0 0.2rem #00bfa6)" : 0,
      borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",

      cursor: state.isDisabled ? "not-allowed" : "default",

      "&:hover": {
        borderColor: state.isFocused ? "#00bfa6" : "#00bfa6",
      },
    }),
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Earn Points for Your Dorm! </h1>{" "}
      <br />
      <Select
        styles={customStyles}
        value={dorms.find((x) => x.label === selectedValue)}
        options={dorms}
        onChange={handleChange}
        isOptionDisabled={(option) => option.isDisabled}
        placeholder="Select your dorm..."
      />
      <br />
      <b>Your dorm: {JSON.stringify(selectedValue, null, 2)}</b>
      <h1></h1>
    </div>
  );
}

export default Dropdown2;

export {Dropdown2};
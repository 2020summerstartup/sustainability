import React, { useState, useContext } from "react";
import styles from "../Dropdown.module.css";

import { AuthUserContext, withAuthorization } from "../../services/Session";
import {updateUserDorm, getDorm} from "../../services/Firebase"

import Select from "react-select";
import { assignRanking } from "../Leaderboard";

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
  const authContext = useContext(AuthUserContext);
  var placeholder = localStorage.getItem('dorm');
  if (placeholder == null) {
    placeholder = "Select your dorm..."
    alert("Please select your dorm in setting page!");
  } // modified from "original if statement I wrote" that someone else created. -Katie

  const handleChange = (obj) => {
    const dorm = obj.label.replace(/"([^"]+)":/g, "$1:")
    setSelectedValue(dorm);
    localStorage.setItem('dorm', dorm);
    updateUserDorm(authContext.email, dorm);
    getDorm().doc(dorm).onSnapshot(docSnapshot => {
      assignRanking(docSnapshot.data())
    })
    // the .replace was supposed to get rid of quotes but it didn't work
  };
  

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      backgroundColor: state.isSelected ? "#24a113" : "white",
      borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    
      "&:hover": {
        color: state.isDisabled ? "lightgrey" : "black",
        fontWeight: state.isFocused ? "bold" : "normal",
        backgroundColor: state.isDisabled ? "white" : "#24a113",
      },
    }),
    control: (styles, state) => ({
      ...styles,
      boxShadow: state.isFocused ? "0 0 0 0.2rem #24a113)" : 0,
      borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",

      cursor: state.isDisabled ? "not-allowed" : "default",

      "&:hover": {
        borderColor: state.isFocused ? "#24a113" : "#24a113",
      },
    }),
  };

  return (
    <div>
      <Select
        styles={customStyles}
        value={dorms.find((x) => x.label === selectedValue)}
        options={dorms}
        onChange={handleChange}
        isOptionDisabled={(option) => option.isDisabled}
        placeholder= { placeholder }
      />
      <br />
      <b>Your dorm: { localStorage.getItem('dorm') }</b>
    </div>
  );
}

export {Dropdown2};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dropdown2);

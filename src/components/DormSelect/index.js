import React, { useContext } from "react";
import { AuthUserContext } from "../../services/Session";
import { updateUserDorm, getDorm } from "../../services/Firebase";
import { assignRanking } from "../../pages/CompetePage/CompeteTabs/leaderboard";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../pages/HomePage/toastify.css";

// Styles for dropdown menu
const useStyles = makeStyles((theme) => ({
  // Provides context for form inputs
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

// Function that contains the dropdown menu for selecting the user's dorm
export default function DormSelect() {
  const classes = useStyles();
  const [dorm, setDorm] = React.useState("");

  // Used to make sure user is authenticated
  // Gives an alert if the user does not have a dorm selected
  const authContext = useContext(AuthUserContext);
  var placeholder = localStorage.getItem('dorm');
  if (placeholder == null) {
    placeholder = "Select your dorm..."
  }

  // Sets dorm by calling local storage and firebase
  const handleChange = (event) => {
    placeholder=dorm;
    setDorm(event.target.value);
    localStorage.setItem("dorm", event.target.value);
    updateUserDorm(authContext.email, event.target.value);
    getDorm()
      .doc(event.target.value)
      .onSnapshot((docSnapshot) => {
        assignRanking(docSnapshot.data());
      });
      toast.configure();
      toast.success('You are now part of ' + event.target.value + ' dorm!');
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Dorm</InputLabel>
        <Select
          native
          value={placeholder}
          onChange={handleChange}
          inputProps={{ "aria-label": "dorm" }}
          style={{ width: "10rem"}}
        >
          <option aria-label="None" value="" />
          <option value={"South"}>South</option>
          <option value={"Case"}>Case</option>
          <option value={"East"}>East</option>
          <option value={"West"}>West</option>
          <option value={"North"}>North</option>
          <option value={"Drinkward"}>Drinkward</option>
          <option value={"Sontag"}>Sontag</option>
          <option value={"Linde"}>Linde</option>
        </Select>
      </FormControl>
    </div>
  );
}

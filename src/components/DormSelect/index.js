import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { AuthUserContext } from "../../services/Session";
import { updateUserDorm, getDorm } from "../../services/Firebase";
import { assignRanking } from "../../pages/CompetePage/CompeteTabs/leaderboard";

// Styles for dropdown menu
const useStyles = makeStyles((theme) => ({
  // Provides context for form inputs
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    const dorm = event.target.value;
    setDorm(event.target.value);
    localStorage.setItem("dorm", dorm);
    updateUserDorm(authContext.email, dorm);
    getDorm()
      .doc(dorm)
      .onSnapshot((docSnapshot) => {
        assignRanking(docSnapshot.data());
      });
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Dorm</InputLabel>
        {/* <InputLabel>{newPlaceholder}</InputLabel> */}
        <Select
          native
          value={placeholder}
          onChange={handleChange}
          label="Dorm"
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
        {/* <Select
          native
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={dorm}
          onChange={handleChange}
          label="Dorm"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"South"}>South</MenuItem>
          <MenuItem value={"Case"}>Case</MenuItem>
          <MenuItem value={"East"}>East</MenuItem>
          <MenuItem value={"West"}>West</MenuItem>
          <MenuItem value={"North"}>North</MenuItem>
          <MenuItem value={"Drinkward"}>Drinkward</MenuItem>
          <MenuItem value={"Sontag"}>Sontag</MenuItem>
          <MenuItem value={"Linde"}>Linde</MenuItem>
        </Select> */}
      </FormControl>
      {/* <div>
      Your dorm is {localStorage.getItem('dorm')}
    </div> */}
    </div>
  );
}

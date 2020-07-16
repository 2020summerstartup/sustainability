import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { AuthUserContext, withAuthorization } from "../services/Session";
import {updateUserDorm, getDorm} from "../../services/Firebase";
import { assignRanking } from "../Leaderboard";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function DormSelect() {
    const classes = useStyles();
    const [dorm, setDorm] = React.useState('');
    
    const authContext = useContext(AuthUserContext);
    var placeholder = localStorage.getItem('dorm');
    if (placeholder == null) {
      placeholder = "Select your dorm..."
      alert("Please select your dorm in setting page!");
    }
  
    const handleChange = (event) => {
      const dorm = event.target.value
      setDorm(event.target.value);
      localStorage.setItem('dorm', dorm);
      updateUserDorm(authContext.email, dorm);
      getDorm().doc(dorm).onSnapshot(docSnapshot => {
        assignRanking(docSnapshot.data())
      })
    };
  
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Dorm</InputLabel>
        <Select
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
        </Select>
      </FormControl>
      <div>
        Your dorm is {localStorage.getItem('dorm')}
      </div>
      </div>
  );
}

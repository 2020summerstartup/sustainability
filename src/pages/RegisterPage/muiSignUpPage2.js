// THIS IS THE VERSION THAT KOBE AND AMY ARE WORKING ON
import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as firebase from "firebase";
import "firebase/auth";

import { PasswordInput } from "./muiSignInPage";
import { withFirebase, createUser } from "../../services/Firebase";
import { assignData } from "../HomePage/index.js";
import * as ROUTES from "../../constants/routes";
import signupImg from "../../img/login2.svg";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { RemoveRedEye } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import HomeIcon from "@material-ui/icons/Home";


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { AuthUserContext, withAuthorization } from "../../services/Session";
import {updateUserDorm, getDorm} from "../../services/Firebase";
import { assignRanking } from "../../pages/CompetePage/leaderboard";

const SignUpPage = () => (
  <div className="base-container">
    <SignUpForm />
  </div>
);

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formIcon: {
    marginRight: "1rem",
  },
  eye: {
    cursor: "pointer",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "red",
    marginTop: "1rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const useStyles2 = makeStyles((theme) => ({
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
// function DormSelect() {
//   const classes = useStyles2();
//   const [dorm, setDorm] = React.useState('');
  
//   // Used to make sure user is authenticated
//   // Gives an alert if the user does not have a dorm selected
//   // const authContext = useContext(AuthUserContext);
//   // var placeholder = localStorage.getItem('dorm');
//   // var newPlaceholder = localStorage.getItem('dorm');
//   // if (placeholder == null) {
//   //   placeholder = "Select your dorm..."
//   //   alert("Please select your dorm in setting page!");
//   //   newPlaceholder = "Dorm";
//   }

//   // Sets dorm by calling local storage and firebase
//   const handleChange = (event) => {
//     const dorm = event.target.value
//     setDorm(event.target.value);
//     // localStorage.setItem('dorm', dorm);
//     // updateUserDorm(authContext.email, dorm);
//     // getDorm().doc(dorm).onSnapshot(docSnapshot => {
//     //   assignRanking(docSnapshot.data())
//     // })
//   };


// return (
//   <div>
//     <FormControl variant="outlined" className={classes.formControl}>
//     <InputLabel id="demo-simple-select-outlined-label">
//       {/* {newPlaceholder} */}
//     </InputLabel>
//     <Select
//       labelId="demo-simple-select-outlined-label"
//       id="demo-simple-select-outlined"
//       value={dorm}
//       onChange={handleChange}
//       label="Dorm"
//     >
//       <MenuItem value="">
//         <em>None</em>
//       </MenuItem>
//       <MenuItem value={"South"}>South</MenuItem>
//       <MenuItem value={"Case"}>Case</MenuItem>
//       <MenuItem value={"East"}>East</MenuItem>
//       <MenuItem value={"West"}>West</MenuItem>
//       <MenuItem value={"North"}>North</MenuItem>
//       <MenuItem value={"Drinkward"}>Drinkward</MenuItem>
//       <MenuItem value={"Sontag"}>Sontag</MenuItem>
//       <MenuItem value={"Linde"}>Linde</MenuItem>
//     </Select>
//   </FormControl>
//   {/* <div>
//     Your dorm is {localStorage.getItem('dorm')}
//   </div> */}
//   </div>
// );

class PasswordInput2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true,
    };
  }

  togglePasswordMask = () => {
    this.setState((prevState) => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

  render() {
    const { classes } = this.props;
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye
                className={classes.eye}
                onClick={this.togglePasswordMask}
              />
            </InputAdornment>
          ),
          startAdornment: <LockOpenIcon className={classes.formIcon} />,
        }}
      />
    );
  }
}

PasswordInput2.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

PasswordInput2 = withStyles(useStyles)(PasswordInput2);

const INITIAL_STATE = {
  user: {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    dorm: "",
    image: null,
    points: 0,
  },
  error: null,
};


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.state = {
      pw: "",
    };
    this.state = {
      selected: null,
      hasError: false
    };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, dorm, image, points } = this.state;

    createUser(email, username, dorm);

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
          username,
          email,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange(value) {
    this.setState({ selected: value });
  }

  // onChangePW = (event) => {
  //   const { name, value } = event.target;

  //   this.setState({ [name]: value });
  // };

  render() {
    const { classes } = this.props;
    const { pw } = this.state;
    const {
      username,
      email,
      dorm,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      //   dorm === "" ||
      username === "";

    return (
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <div className="image">
            <img alt="sign up" src={signupImg} />
          </div>
          <form onSubmit={this.onSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              value={username}
              autoComplete="name"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <PersonIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <EmailIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            {/* Comment this out later!! for testing only! */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="dorm"
              label="Dorm"
              name="dorm"
              value={dorm}
              onChange={this.onChange}
              InputProps={{
                startAdornment: <HomeIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            /> */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                {/* {newPlaceholder} */}
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={dorm}
                onChange={this.handleChange}
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
            {/* <DormInput /> */}
            <PasswordInput2
              label="Password"
              name="password"
              value={passwordOne}
              onChange={this.onChangePW}
            />
            <PasswordInput
              label="Verify Password"
              name="password"
              value={passwordTwo}
              onChange={this.onChangePW}
            />
            {error && (
              <Typography variant="body2" className={classes.errorText}>
                {error.message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const SignUpFormStyled = withStyles(useStyles)(SignUpFormBase);

const SignUpForm = withRouter(withFirebase(SignUpFormStyled));

export { PasswordInput2 };
export { SignUpForm };

export default SignUpPage;

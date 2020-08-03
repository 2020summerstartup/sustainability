import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Reward from "react-rewards";

import {
  withFirebase,
  createUser,
  getUser,
  getUserImpact,
} from "../../services/Firebase";
import { assignData } from "../HomePage";
import * as ROUTES from "../../constants/routes";
import { PasswordInput } from "./muiSignInPage";
import signupImg from "../../img/login2.svg";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

// Sounds
import signup from "../../sounds/hero_simple-celebration-03.wav";

// import your fontawesome library
import "../../components/FontAwesomeIcons";

// Imports to support the dorm dropdown
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// The value displayed in the dorm dropdown menu.
var dormValue = "Select your dorm...";

const SignUpPage = () => (
  <div className="base-container">
    <SignUpForm />
  </div>
);

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
    // Following line was unused -Katie
    // const { classes } = this.props;
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        // type="password"
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableFocusRipple
                disableRipple
                style={{ backgroundColor: "transparent" }}
                aria-label="toggle password visibility"
                onClick={this.togglePasswordMask}
                edge="end"
              >
                {passwordIsMasked ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: <LockOpenIcon style={{ marginRight: "1rem" }} />,
        }}
      />
    );
  }
}

PasswordInput2.propTypes = {
  onChange: PropTypes.func.isRequired,
  // value: PropTypes.func.isRequired,
};

// The initial state of all information to be completed by the user
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  dorm: "",
  image: null,
  points: 0,
  error: null,
};

// Previously INITIAL_STATE was set like this, but the user wrapper caused an error in the console. I don't think the wrapper was necessary, so I've removed it. -Katie
// const INITIAL_STATE = {
//   user: {
//     username: "",
//     email: "",
//     passwordOne: "",
//     passwordTwo: "",
//     dorm: "",
//     image: null,
//     points: 0,
//   },
//   error: null,
// };

// sound play for favorites button
const signupAudio = new Audio(signup);

// called when the user clicks sign up to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    localStorage.clear();
    const { username, email, passwordOne, dorm } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        //create user in firebase firestore database
        createUser(email, username, dorm);
        localStorage.setItem("email", email);
      })
      .then(() => {
        // once user is created in firestore we need to pull that data and update data into local storage
        // needed to display total point, progress modal, and enable app to run withour error
        getUser(email).onSnapshot((docSnapshot) => {
          assignData(docSnapshot.data());
        });
        // fetches user's impact points from firestore and updates local storage
        getUserImpact(email);
        // routes user to home page
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  // When text is entered/the dropdown is changed, this function is called. It updates the state to reflect changes from the new event.
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // If the user changed the dorm in the dropdown
    if (event.target.name === "dorm") {
      // Update the dormValue (value displayed in the dropdown) so they see their current selection
      dormValue = event.target.value;
    }
  };

  render() {
    // Following line was unused -Katie
    // const { classes } = this.props;

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
      dorm === "" ||
      username === "" ||
      !(
        dorm === "South" ||
        dorm === "North" ||
        dorm === "West" ||
        dorm === "East" ||
        dorm === "Case" ||
        dorm === "Sontag" ||
        dorm === "Drinkward" ||
        dorm === "Linde" ||
        dorm === "Atwood"
      );

    return (
      <Container maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <div className="image">
            <img alt="sign up" src={signupImg} />
          </div>
          <form
            onSubmit={this.onSubmit}
            styles={{ width: "100%", marginTop: "1rem" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              autoComplete="name"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <PersonIcon style={{ marginRight: "1rem" }} />,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <EmailIcon style={{ marginRight: "1rem" }} />,
              }}
            />
            <FormControl variant="filled" fullWidth margin="normal">
              <InputLabel>Dorm</InputLabel>
              <Select
                native
                value={dormValue}
                name="dorm"
                // label="Dorm"
                onChange={this.onChange}
                inputProps={{ "aria-label": "dorm" }}
                variant="outlined"
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
                <option value={"Atwood"}>Atwood</option>
              </Select>
            </FormControl>
            <PasswordInput2
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            <PasswordInput
              label="Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />

            {error && (
              <Typography
                variant="body2"
                style={{ color: "red", marginTop: "1rem" }}
              >
                {error.message}
              </Typography>
            )}

            <Reward
              ref={(ref) => {
                this.reward = ref;
              }}
              type="memphis"
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "1rem auto 1.5rem auto" }}
                disabled={isInvalid}
                onClick={() => {
                  playSound(signupAudio);
                  this.reward.rewardMe();
                }}
              >
                Sign Up
              </Button>
              {/* <p>
                <center>Make sure all fields are completed! </center>
              </p> */}
            </Reward>

            <Grid container justify="center">
              <Grid item>
                <Link
                  to={ROUTES.SIGN_IN}
                  style={{
                    color: "var(--theme)",
                    textDecoration: "none",
                    paddingBottom: "2rem",
                  }}
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, PasswordInput2 };

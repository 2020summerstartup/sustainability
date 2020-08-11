import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
// For emoji confetti on sign up click
import Reward from "react-rewards";
// Firebase imports
import {
  withFirebase,
  createUser,
  getUser,
  getUserImpact,
  getSchoolImpact,
} from "../../services/Firebase";
import { assignData } from "../HomePage";
import * as ROUTES from "../../constants/routes";
// For PasswordOne data
import { PasswordInput } from "./muiSignInPage";
import signupImg from "../../img/login2.svg";
// Material UI Imports
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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

// Imports to support the dorm dropdown
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// Admin stuff roles
import * as ROLES from "../../constants/roles";
// import Checkbox from "@material-ui/core/Checkbox";

// Sounds
import signup from "../../sounds/hero_simple-celebration-03.wav";

// The value displayed in the dorm dropdown menu.
var dormValue = "Select your dorm...";

// Main Component 
const SignUpPage = () => (
  <div className="base-container">
    <SignUpForm />
  </div>
);

// Used for PasswordTwo data - Material UI
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
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        // Toggle for password display
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
  // Admin data
  isAdmin: false,
  error: null,
};

// sound play for favorites button
const signupAudio = new Audio(signup);

// called when the user clicks sign up to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};

// Base - composed with firebase and routes below
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  // Checkbox for Admin status
  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  // Used to make users - "Sign Up" Button
  onSubmit = (event) => {
    localStorage.clear();
    // Start of admin actions
    const { username, email, passwordOne, dorm, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    } else {
      roles[ROLES.USER] = ROLES.USER;
    }
    // End of admin actions

    // Commented out code is from before admin stuff
    // const { username, email, passwordOne, dorm } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles, // for admin control
        });
      })
      .then(() => {
        // Create user in firebase firestore database
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
        getSchoolImpact();
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
    const {
      username,
      email,
      dorm,
      passwordOne,
      passwordTwo,
      // isAdmin is unused (the code associated with it is a checkbox, commented out below), so it throws a warning.
      // The following comment prevents the warning from displaying.
      // eslint-disable-next-line
      isAdmin,
      error,
    } = this.state;

    // Throws error for sign up for invalid inputs
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
          {/* SignUp form, on submit creates firebase user */}
          <form
            onSubmit={this.onSubmit}
            styles={{ width: "100%", marginTop: "1rem" }}
          >
            {/* Name input */}
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
            {/* Email Input */}
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
            {/* DORM DROPDOWN and Input */}
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel>Dorm</InputLabel>
              <Select
                native
                value={dormValue}
                name="dorm"
                label="Dorm"
                onChange={this.onChange}
                inputProps={{ "aria-label": "dorm" }}
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
            {/* Added in admin checkbox. I've commented out this checkbox because we don't want it in the final product. But it can be useful
            for testing, so I'm leaving the code here. -KJ */}
            {/* <label>
              Admin:
              <input
                name="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={this.onChangeCheckbox}
              />
            </label> */}
            {/* Throws error for invalid inputs */}
            {error && (
              <Typography
                variant="body2"
                style={{ color: "red", marginTop: "1rem" }}
              >
                {error.message}
              </Typography>
            )}

            {/* Memphis reward for users when click sign up button */}
            <Reward
              ref={(ref) => {
                this.reward = ref;
              }}
              type="memphis"
            >
              {/* Sign Up Submit Button */}
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
            </Reward>
            {/* Link to Sign In Page */}
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

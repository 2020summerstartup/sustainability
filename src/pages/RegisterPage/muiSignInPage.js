import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// DELETE this after we know firebase didn't break
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

import { withFirebase, getUser, getUserImpact } from "../../services/Firebase";
import { assignData } from "../HomePage";
import * as ROUTES from "../../constants/routes";
import signinImg from "../../img/login3.svg";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

const SignInPage = () => (
  <div className="base-container">
    <SignInForm />
  </div>
);

class PasswordInput extends Component {
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
          startAdornment: <LockIcon style={{ marginRight: "1rem" }} />,
        }}
      />
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  // value: PropTypes.func.isRequired,
};

const INITIAL_STATE = {
  email: "",
  password: "",
  pw: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    localStorage.clear();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then( () => {
        // initalizes user's impact points in local storage 
        getUserImpact(email);
        this.setState({ ...INITIAL_STATE });
        // takes user to home page
        this.props.history.push(ROUTES.HOME);
        // refresh needed to have points initially displayed
        // window.location.reload();
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });
    // initalizes user's data into local storage 
    // needed to display total point, progress modal, and enable app to run without error
    getUser(email).onSnapshot(
      (docSnapshot) => {
        // Only assign data if the user was legit. (If they tried to sign up with an email address not associated with any current user, this won't run.)
        if(docSnapshot.data()) {
          assignData(docSnapshot.data());
        }
      },
    );
    // initalizes user's impact points in local storage 
    getUserImpact(email);

    event.preventDefault();
  };


  
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangePW = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="base-container">
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
              Sign in
            </Typography>
            <div className="image">
              <img alt="sign in" src={signinImg} />
            </div>
            <form
              onSubmit={this.onSubmit}
              style={{ width: "100%", marginTop: "1rem" }}
              noValidate
            >
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
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={this.onChangePW}
              />
              {error && (
                <Typography
                  variant="body2"
                  style={{ color: "red", marginTop: "1rem" }}
                >
                  {error.message}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "1rem auto 1.5rem auto" }}
                disabled={isInvalid}
              >
                Sign In
              </Button>
              <Grid container justify="space-between">
                <Grid item>
                  <Link
                    to={ROUTES.PASSWORD_FORGET}
                    style={{
                      color: "var(--theme)",
                      textDecoration: "none",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={ROUTES.SIGN_UP}
                    style={{
                      color: "var(--theme)",
                      textDecoration: "none",
                    }}
                  >
                    Sign up here!
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithRedirect = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const signOutFirebase = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export { SignInForm, PasswordInput };

export default SignInPage;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import {connect} from 'react-redux';
import firebase from "firebase/app";
import "firebase/auth";

import { assignData, withFirebase, getUserDocRef, getUserImpact, getSchoolImpact } from "../../services/Firebase";
import * as ROUTES from "../../constants/routes";
import { ReactComponent as SignIn } from "../../img/signin.svg";

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
  goHome: false,
};

function waitOneSec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    localStorage.clear();
    var { email, password } = this.state;
    email = email.toLowerCase();

    // begins the sign in process by checking if the user is authenticated in firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // if there is an issue, log it to the console
        this.setState({ error });
        console.log('Error:', error);
      });

      // pulls all necessary user & school data from firebase
      // IMPORTANT: this is async because getting data from firebase takes time & we need to make sure everythign in local storage is 
      // initalized before loading page or there will be MANY errors & points/favs/badges will not display properly 
      async function getUserData (email){
        await waitOneSec(); // to give authentication check some time to run --> user needs to be authenticated to access the data
        getUserImpact(email); // initalizes user's impact points in local storage 
        getSchoolImpact(); // initaizes the school's impact points in local storage 


        // gets user's points, mastered & favroited actions from firebase & sets them all in local storage
        getUserDocRef(email).onSnapshot(
          (docSnapshot) => {
            // Only assign data if the user was legit. (If they tried to sign up with an email address not associated with any current user, this won't run.)
            if(docSnapshot.data()) {
              assignData(docSnapshot.data());  // this function is where all the user's info is parsed through and set in local storage 
            }
          },
        );
        await waitOneSec(); // give this function some time to run 
      }



      
      event.preventDefault();
    // takes user to home page
    async function goHome(props, email) {
      await getUserData(email); // wait for getUserData async function to run (2 sec) and set all of the user's info in local storage
      props.reduxLogin(email, null);
      console.log('redux go', props)
      props.history.push(ROUTES.HOME); // then we can route to home & everything will disaply properly
    }

    goHome(this.props, email)
      .then(() => {
        this.setState({ ...INITIAL_STATE }); // clears all the input fields on the sign in form
      });
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
    const isInvalid = password === "" || email === ""; //submit button requires something to be entered into each field 

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
            <SignIn className="image" />
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


const mapDispatchToProps = (dispatch) => {
  return { 
    reduxLogin: (email, firestoreState) => dispatch({ type: 'USER_LOGIN', payload: {email, firestoreState}})
  }
}

const signInFormConnected = connect(null, mapDispatchToProps)(SignInFormBase);
const SignInForm = compose(withRouter, withFirebase)(signInFormConnected);

export { SignInForm, PasswordInput };

export default SignInPage;

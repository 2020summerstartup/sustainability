import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// DELETE this after we know firebase didn't break
// import * as firebase from "firebase";
import firebase from 'firebase/app';
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
import { withStyles } from "@material-ui/core/styles";
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
  linkText: {
    color: "black",
    textDecoration: "none",
  },
  linkTextBigScreen: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      color: "black",
      textDecoration: "none",
    },
  },
  linkTextSmallScreen: {
    color: "black",
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "red",
    marginTop: "1rem",
  },
});

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
          startAdornment: <LockIcon className={classes.formIcon} />,
        }}
      />
    );
  }
}

PasswordInput.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  // value: PropTypes.func.isRequired,
};

PasswordInput = withStyles(useStyles)(PasswordInput);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.state = {
      pw: "",
    };
  }

  onSubmit = (event) => {
    localStorage.clear();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then( () => {
        // initalizes user's data into local storage 
        // needed to display total point, progress modal, and enable app to run withour error
        getUser(email).onSnapshot(
          (docSnapshot) => {
              assignData(docSnapshot.data());
          },
        );
      }).then( () => {
        // initalizes user's impact points in local storage 
        getUserImpact(email)
      }).then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
        window.location.reload();
      }).catch((error) => {
        this.setState({ error });
        console.log(error);
      });

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
    const { classes } = this.props;
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="base-container">
        <Container maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className="image">
              <img alt="sign in" src={signinImg} />
            </div>
            <form onSubmit={this.onSubmit} className={classes.form} noValidate>
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
                  startAdornment: <EmailIcon className={classes.formIcon} />,
                }}
              />
              <PasswordInput
                label="Password"
                name="password"
                value={password}
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
                color="secondary"
                className={classes.submit}
                disabled={isInvalid}
              >
                Sign In
              </Button>
              <Grid container justify="space-between">
                <Grid item>
                  <Link
                    to={ROUTES.PASSWORD_FORGET}
                    className={classes.linkText}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={ROUTES.SIGN_UP}
                    className={classes.linkTextBigScreen}
                  >
                    Don't have an account? Sign Up
                  </Link>
                  <Link
                    to={ROUTES.SIGN_UP}
                    className={classes.linkTextSmallScreen}
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

const SignInFormStyled = withStyles(useStyles)(SignInFormBase);

const SignInForm = compose(withRouter, withFirebase)(SignInFormStyled);

export { SignInForm };
export { PasswordInput };

export default SignInPage;

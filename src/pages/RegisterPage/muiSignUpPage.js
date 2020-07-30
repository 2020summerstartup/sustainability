import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Reward from "react-rewards";

import { withFirebase, createUser } from "../../services/Firebase";
import * as ROUTES from "../../constants/routes";
import { PasswordInput } from "./muiSignInPage";
import signupImg from "../../img/login2.svg";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import HomeIcon from "@material-ui/icons/Home";

// Sounds
import signup from "../../sounds/hero_simple-celebration-03.wav";

// import your fontawesome library
import "../../components/FontAwesomeIcons";
import { faBalanceScaleRight } from "@fortawesome/free-solid-svg-icons";

const SignUpPage = () => (
  <div className="base-container">
    <SignUpForm />
  </div>
);

// Styles for main signup page
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
});

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
        // type="password"
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.togglePasswordMask}
                edge="end"
              >
                {passwordIsMasked ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
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
  // value: PropTypes.func.isRequired,
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

// sound play for favorites button
const signupAudio = new Audio(signup);

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, dorm } = this.state;

    createUser(email, username, dorm);
    localStorage.setItem("email", email);

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
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

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
      !(dorm === "South" || dorm === "North" || dorm === "West" || dorm === "East" || dorm === "Case" || dorm === "Sontag" || dorm === "Drinkward" || dorm === "Linde" || dorm === "Atwood" );



    // this will ensure that everyone's dorm entry only has the first letter of the word capitalized
    // dormUpper will be the value that is read from the input field as used as the state rather than 
    // what the user actually types ( ie. user could type 'case' and state would instead be 'Case') 
    var dormUpper;
    const makeCapitalDormName = () => {
      if (typeof(dorm) === "undefined" || dorm.length < 1 ) {
        return null
        } else {
          dormUpper = (dorm[0].toUpperCase() + dorm.slice(1).toLowerCase());      
          } 
    }
    makeCapitalDormName();


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
          <form onSubmit={this.onSubmit} className={classes.form}>
            {/* <Image source={{uri:this.state.user.avatar}} /> */}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              // value={username}
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
              // value={email}
              autoComplete="email"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <EmailIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="dorm"
              label="Dorm"
              name="dorm"
              // placeholder to make clear what the user should input
              placeholder="eg. West, Drinkward, Case, etc."
              // needs to be dormUpper to ensure that they are registering to a valid dorm
              value={dormUpper}
              onChange={this.onChange}
              InputProps={{
                startAdornment: <HomeIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <PasswordInput2
              // type="password"
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            <PasswordInput
              // type="password"
              label="Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />

            {error && (
              <Typography variant="body2" className={classes.errorText}>
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
                className={classes.submit}
                disabled={isInvalid}
                onClick={() => {
                  playSound(signupAudio);
                  this.reward.rewardMe();
                  localStorage.clear();
                }}
              >
                Sign Up
              </Button>
              <p><center>Make sure all fields are filled in and your dorm is spelled correctly! </center></p>
            </Reward>
          </form>
        </div>
      </Container>
    );
  }
}

// const SignUpLink = () => (
//   <p>
//     Don't have an account? Get with the program, and{" "}
//     <Link to={ROUTES.SIGN_UP}>Sign Up</Link> here now!
//   </p>
// );

const SignUpFormStyled = withStyles(useStyles)(SignUpFormBase);

const SignUpForm = withRouter(withFirebase(SignUpFormStyled));

export default SignUpPage;

export { SignUpForm, PasswordInput2 };

import React, { Component } from "react";
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
});

const useStyles2 = makeStyles((theme) => ({
  formIcon: {
    marginLeft: "5px",
    marginRight: "1rem",
  },
}));

const dorms = [
  { title: "South" },
  { title: "Case" },
  { title: "East" },
  { title: "West" },
  { title: "North" },
  { title: "Drinkward" },
  { title: "Sontag" },
  { title: "Linde" },
  { title: "Atwood" },
];

function DormInput() {
  const classes = useStyles2();

  return (
    <Autocomplete
      id="dorm input"
      options={dorms}
      getOptionLabel={(option) => option.title}
      disableClearable
      fullWidth
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Dorms"
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment>
                  <HomeIcon className={classes.formIcon} />
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
}

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

  onChangePW = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

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
            <TextField
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
            />
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

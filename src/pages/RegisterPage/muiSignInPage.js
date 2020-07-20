import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as firebase from "firebase";
import "firebase/auth";

import { SignUpLink } from "./signUpPage";
import { PasswordForgetLink } from "./passwordForgetPage.js.js";
import { withFirebase, getUser } from "../../services/Firebase";
import { assignData } from "../HomePage/index.js";
import * as ROUTES from "../../constants/routes";
import signinImg from "../../img/login3.svg";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();

    getUser(email).onSnapshot(
      (snapshot) => {
        if (snapshot.exists) {
          assignData(snapshot.data());
        } else {
          alert("Please sign up again!");
        }
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
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
//NEED THIS
// const SignInPage = compose(withRouter, withFirebase)(SignInPage);

// export { SignInForm };

export default withStyles(useStyles)(SignInPage);

// class SignInFormBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = (event) => {
//     const { email, password } = this.state;

//     this.props.firebase
//       .doSignInWithEmailAndPassword(email, password)
//       .then(() => {
//         this.setState({ ...INITIAL_STATE });
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch((error) => {
//         this.setState({ error });
//       });

//     event.preventDefault();

//     getUser(email).onSnapshot(
//       (snapshot) => {
//         if (snapshot.exists) {
//           assignData(snapshot.data());
//         } else {
//           alert("Please sign up again!");
//         }
//       },
//       (err) => {
//         console.log(`Encountered error: ${err}`);
//       }
//     );
//   };

//   onChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     const { email, password, error } = this.state;
//     const isInvalid = password === "" || email === "";

//     return (
//       <form onSubmit={this.onSubmit} className="form">
//         <div className="form-group">
//           <FontAwesomeIcon icon="envelope" className="icon envelope" />
//           <input
//             name="email"
//             value={email}
//             onChange={this.onChange}
//             type="text"
//             placeholder="Email Address"
//           />
//         </div>
//         <div className="form-group">
//           <FontAwesomeIcon icon="lock" className="icon" />
//           <input
//             name="password"
//             value={password}
//             onChange={this.onChange}
//             type="password"
//             placeholder="Password"
//           />
//         </div>

//         <button className="button" disabled={isInvalid} type="submit">
//           Sign In
//         </button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

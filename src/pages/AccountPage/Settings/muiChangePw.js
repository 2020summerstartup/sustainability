import React, { Component } from "react";
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import { withFirebase } from "../../../services/Firebase";
import accountImg from "../../../img/account.svg";
import { PasswordInput } from "../../RegisterPage/muiSignInPage";
import { PasswordInput2 } from "../../RegisterPage/muiSignUpPage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../HomePage/toastify.css";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


// Sounds
import toastNotify from "../../../sounds/notification_simple-01.wav";

// Authorized Page for signed in users to change dorm, inside Settings Drawer
const ChangePW = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <PasswordChange />
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);
// Styles for change password form
const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
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

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  pw: "",
  error: null,
};

toast.configure();

// sound play for favorites button
const toastAudio = new Audio(toastNotify);

// called by onclick to play the audio file
const playSound = (audioFile) => {
  audioFile.play();
};
// Base of form - styled with material ui and composed with firebase below
class PasswordChangeFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  // Captures new password and changes it
  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        toast.success("Your password as been changed!", { autoClose: 5000 });
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    const { classes } = this.props;

    return (
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Want to Change Your Password?
          </Typography>
          <div className="image">
            <img alt="change your password" src={accountImg} />
          </div>
          {/* Changes password for firebase authentication on submit */}
          <form onSubmit={this.onSubmit} className={classes.form}>
            {/* New password input */}
            <PasswordInput2
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            {/* New password verified */}
            <PasswordInput
              label="Verify Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
            {error && (
              <Typography variant="body2" className={classes.errorText}>
                {error.message}
              </Typography>
            )}
            {/* Submit button - plays sound on click */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
              onClick={() => playSound(toastAudio)}
            >
              Change Password
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const condition = (authUser) => !!authUser;

// Styles Base form with material ui
const PasswordChangeFormStyled = withStyles(useStyles)(PasswordChangeFormBase);
// Wraps in Firebase
const PasswordChange = withFirebase(PasswordChangeFormStyled);

export default withAuthorization(condition)(ChangePW);

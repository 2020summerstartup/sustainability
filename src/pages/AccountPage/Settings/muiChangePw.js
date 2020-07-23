import React, { Component } from "react";
import PasswordChangeForm from "./formChangePw.js";
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import { withFirebase } from "../../../services/Firebase";
import accountImg from "../../../img/account.svg";
import { PasswordInput } from "../../RegisterPage/muiSignInPage";
import { PasswordInput2 } from "../../RegisterPage/muiSignUpPage";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePW = () => (
  <div>
    <AuthUserContext>
      {(authUser) => (
        <div class="base-container">
          <PasswordChange />
        </div>
      )}
    </AuthUserContext>
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

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

toast.configure();

class PasswordChangeFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.state = {
      pw: "",
    };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        toast("Your password as been changed!", { autoClose: 5000 });
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
    const { pw } = this.state;

    return (
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Want to Change Your Password?
          </Typography>
          <div className="image">
            <img alt="change your password" src={accountImg} />
          </div>
          <form onSubmit={this.onSubmit} className="form">
            <PasswordInput2
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
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

const PasswordChangeFormStyled = withStyles(useStyles)(PasswordChangeFormBase);

const PasswordChange = withFirebase(PasswordChangeFormStyled);

export { PasswordChangeForm };

export default withAuthorization(condition)(ChangePW);

import React, { Component } from "react";
import { withFirebase } from "../../../services/Firebase";
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import changePwImg from "../../../img/account.svg";
import { PasswordInput } from "../../RegisterPage/muiSignInPage";
import { PasswordInput2 } from "../../RegisterPage/muiSignUpPage";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const ChangePW = () => (
  <div>
    <AuthUserContext>
      {(authUser) => (
        <div class="base-container">
          <PasswordChangeForm />
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
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

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
      })
      .catch((error) => {
        this.setState({ error });
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    const { classes } = this.props;
    const { pw } = this.state;

    return (
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Want to Change Your Password?
          </Typography>
          <div className="image">
            <img alt="change your password" src={changePwImg} />
          </div>
          <form onSubmit={this.onSubmit} className={classes.form} noValidate>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Change My Password
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const condition = (authUser) => !!authUser;

const PasswordChangeFormStyled = withStyles(useStyles)(PasswordChangeFormBase);

const PasswordChangeForm = withFirebase(PasswordChangeFormStyled);

export { PasswordChangeForm };

export default withAuthorization(condition)(ChangePW);

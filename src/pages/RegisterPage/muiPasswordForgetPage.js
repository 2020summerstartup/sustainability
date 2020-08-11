import React, { Component } from "react";
import pwImg from "../../img/forgetpw.svg";
// Firebase Imports
import "firebase/auth";
import { withFirebase } from "../../services/Firebase";
// Material UI Imprts
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";

// Main Components
const MuiPasswordForgetPage = () => (
  <div className="base-container">
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

// Base - wrapped in Firebase below
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
// Submit for changing password
  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };
  // 
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // Following line was unused so I commented it out -Katie
    // const { classes } = this.props;
    const { email } = this.state;
    // Cannot process if there is no email 
    const isInvalid = email === "";

    return (
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
            You forgot your password :(
          </Typography>
          <div className="image">
            <img alt="forgot password" src={pwImg} />
          </div>
          {/* Form for changing password */}
          <form
            onSubmit={this.onSubmit}
            style={{ width: "100%", marginTop: "1rem" }}
            noValidate
          >
            {/* Email Address input */}
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
                startAdornment: <EmailIcon style={{ marginRight: "1rem" }} />,
              }}
            />
            {/* Button to submit password change */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: "1rem auto 1.5rem auto" }}
              disabled={isInvalid}
            >
              Change your Password
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };

export default MuiPasswordForgetPage;

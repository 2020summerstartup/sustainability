import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as firebase from "firebase";
import "firebase/auth";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase, createUser, getUser } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import signinImg from "../../img/login3.svg";

import "./Google-btn.css";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInPage = () => (
  <div className="base-container">
    <h1 className="header">Hello! Please Sign in :)</h1>
    <div className="image">
      <img alt="" src={signinImg} />
    </div>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
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
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <FontAwesomeIcon icon="envelope" className="icon envelope" />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon="lock" className="icon" />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="button" disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
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

export { SignInForm };

export default SignInPage;

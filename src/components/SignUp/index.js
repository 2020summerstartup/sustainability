import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import "./index.css";

import { withFirebase, createUser } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import signupImg from "../../img/login2.svg";

import { signInWithRedirect } from "../SignIn";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// import { Dropdown2 } from "../Dropdown";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUpPage = () => (
  <div className="base-container">
    <h1 className="header">Register</h1>
    <div className="image">
      <img alt="sign up" src={signupImg} />
    </div>
    <SignUpForm />
  </div>
);

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

  
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, dorm, image, points } = this.state;
    // const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // uploadTask.on('state_changed', () => {
    //   // complete function ....
    //   storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //       console.log(url);
    //       this.setState({url});
    //   })
    // });

    createUser(email, dorm);

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
    const { username, email, dorm, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      dorm === "" ||
      username === "";
    // dorm !== "South" || "Sontag"|| "Drinkward"||  "Case"|| "North"||  "East"|| "West";

    return (
      <form onSubmit={this.onSubmit} className="form">
        {/* <Image source={{uri:this.state.user.avatar}} /> */}
        <div className="form-group">
          <FontAwesomeIcon icon="user" className="icon" />
          <input
            className="input-field"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon="envelope" className="icon envelope" />
          <input
            className="input-field"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon="user" className="icon" />
          <input
            className="input-field"
            name="dorm"
            value={dorm}
            onChange={this.onChange}
            type="text"
            placeholder="Res Hall"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon="unlock-alt" className="icon" />
          <input
            className="input-field"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon="lock" className="icon" />
          <input
            className="input-field"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        {/* <div className="form-group"  >
        <input  
            name="dorm"
            value={dorm}
            onChange={this.onChange}
            type="dorm"
            placeholder="Dorm Name"
          /> */}
        {/* {()=>Dropdown2()} */}

        {/* Select dorm! */}

        {/* <input
            name="dormName"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Select your dorm!"
          /> */}
        {/* </div> */}
        <button disabled={isInvalid} type="submit" className="button">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? Get with the program, and{" "}
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link> here now!
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };

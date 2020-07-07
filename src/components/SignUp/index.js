import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import signupImg from "../../img/login2.svg";
import { Firebase } from '../Firebase/firebase'

const SignUpPage = () => (
  <div className="base-container">
    <h1 className="header">Register</h1>
    <div className="image">
      <img alt='' src={signupImg} />
    </div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .then((cred) => {
          Firesbase.db.collection('users').doc(cred.user.uid).set({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            //totalPoints: (find total point counter)
          })
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      firstName === '' ||
      lastName === '';


    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <input 
            name="firstName"
            value={lastName}
            onChange={this.onChange}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input 
            name="lastName"
            value={lastName}
            onChange={this.onChange}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        
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
    Don't have an account? Get with the program, and <Link to={ROUTES.SIGN_UP}>Sign Up</Link> here now!
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
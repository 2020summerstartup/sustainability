import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routes";
import pwImg from "../../img/forgetpw.svg";

// import your fontawesome library
import "../../components/FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PasswordForgetPage = () => (
  <div className="base-container">
    <h1>You forgot your password :(</h1>
    <div className="image">
      <img alt="" src={pwImg} />
    </div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

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

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <FontAwesomeIcon icon="envelope" className="icon envelope" />
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <button disabled={isInvalid} type="submit" className="button">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password? (rip)</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };

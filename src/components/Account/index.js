import React from "react";
import "./index.css";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
// import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import Dropdown from "../Dropdown/maindd";
import Dropdown2 from "../Dropdown/Dropdown2";
import accountImg from "../../img/account.svg";

const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <h1>Your Account: {authUser.email}</h1>
          <SignOutButton className="signout-btn" />
          <Dropdown />
          <Dropdown2 />
          <div className="image">
            <img alt="your account" src={accountImg} />
          </div>
          {/* Removed "forgot password" option because it doesn't make sense here and is elsewhere.
          <h3>Forgot Password?</h3>
          <PasswordForgetForm />
          <h3>-------------------------------------------</h3> */}
          <h3>Change Password?</h3>
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

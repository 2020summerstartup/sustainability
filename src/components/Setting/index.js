import React from "react";
import styles from "../Settings.module.css";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
// import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import Dropdown2 from "../Dropdown";
import accountImg from "../../img/account.svg";

const SettingsPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <h1>Your Account: {authUser.email}</h1>
          <h3>Change your dorm here!</h3>
          <Dropdown2 />
          <h3> </h3>
          <div className="image">
            <img alt="your account" src={accountImg} />
          </div>
          <h3>Change Password?</h3>
          <PasswordChangeForm />
          <h3>-------------------------------------------</h3>
          <h3>Questions or concerns?</h3>
          <p>Go on our info page to contact us with any feedback!</p>
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(SettingsPage);

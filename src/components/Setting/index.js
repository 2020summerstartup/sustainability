import React from "react";
import "./index.css";

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
          
          <SignOutButton className="signout-btn" />
          <h3>Change your dorm here!</h3>
          <Dropdown2 />
          <div className="image">
            <img alt="your account" src={accountImg} />
          </div>
          
          <h3>-------------------------------------------</h3>
          <h3>Change Password?</h3>
          <PasswordChangeForm />
          <h3>Questions or concerns?</h3>
          {/* contact us form */}
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(SettingsPage);

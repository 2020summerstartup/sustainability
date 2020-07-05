import React from "react";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
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
          <SignOutButton />
          <Dropdown />
          <Dropdown2 />
          <div className="image">
            <img alt="" src={accountImg} />
          </div>
          {/* I think we might want to eventually remove this, because most websites
        only have a "forgot password" option on login. If they forgot their password
        but they're logged in they can just change the password below. */}
          <h3>Forgot Password?</h3>
          <PasswordForgetForm />
          <h3>-------------------------------------------</h3>
          <h3>Change Password?</h3>
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

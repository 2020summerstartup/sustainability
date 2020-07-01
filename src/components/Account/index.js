import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import accountImg from "../../img/account.svg";
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="base-container">
        <h1>Your Account: {authUser.email}</h1>
        <div className="image">
          <img alt='' src={accountImg} />
        </div>
        {/* I think we might want to eventually remove this, because most websites
        only have a "forgot password" option on login. If they forgot their password
        but they're logged in they can just change the password below. */}
        <h3>Forgot Password?</h3>
        <PasswordForgetForm />
        <h3>-------------------------------------------</h3>
        <h3>Change Password?</h3>
        <PasswordChangeForm />
        {/* This white space is just here so the change password button is never covered
        by the nav bar on the bottom of the screen (even on mobile devices). It's a somewhat
        janky solution that we hope to fix later. */}
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);
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
          <img src={accountImg} />
        </div>
        <h3>Forgot Password?</h3>
        <PasswordForgetForm />
        <h3>-------------------------------------------</h3>
        <h3>Change Password?</h3>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);
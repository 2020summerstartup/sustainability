import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import accountImg from "../../img/account.svg";
 
const ProfilePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="base-container">
        <h1>Your Account: {authUser.email}</h1>
    <h3> POINTS ACQUIRED😊: {}</h3>
       
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(ProfilePage);
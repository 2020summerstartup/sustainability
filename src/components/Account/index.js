import React from "react";
import "./index.css";
// import "././index.css";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
// import Dropdown from "../Dropdown/maindd";
import Dropdown2 from "../Dropdown/Dropdown2";
import accountImg from "../../img/account.svg";
import { auth } from "firebase";

const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <div className = "accountHeader">ACCOUNT</div>
          <h1>Your Account: {authUser.email}</h1>
          <h3>You're from *insert dorm* {authUser.dorm} dorm!</h3>
          <h3>*insert dorm pic*</h3>

          <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

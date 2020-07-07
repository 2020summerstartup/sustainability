import React from "react";
import "./index.css";
// import "././index.css";
import { Link } from "react-router-dom";
import southdorm from "./southdorm.jpg";

import * as ROUTES from "../../constants/routes";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
// import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
// import Dropdown from "../Dropdown/maindd";
import Dropdown2 from "../Dropdown/Dropdown2";
import accountImg from "../../img/account.svg";
import { auth } from "firebase";

const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        // <div class="base"
        <div className="grid">
          <div>ACCOUNT INFO</div>
          <h1>Your Account: {authUser.email}</h1>
          
          <h3>You've earned *insert user's points*{authUser.points}, way to go!</h3>
          <h3>Your dorm is in *user dorm place*{authUser.dormplace} place with *user dorm points* {authUser.dormPoints}points!</h3>
          <h3>You're representing *insert dorm* {authUser.dorm} dorm</h3>
          <h3>*insert dorm pic*</h3>
          <img src = {southdorm} />

          Entered the wrong dorm? Change your account password?
          <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
          
          <SignOutButton className="signout-btn" />
         
          </div>

      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

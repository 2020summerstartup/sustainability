import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
// import Dropdown from "../Dropdown/maindd";
import Dropdown2 from "../Dropdown/Dropdown2";
import accountImg from "../../img/account.svg";

const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <h1>Your Account: {authUser.email}</h1>
          <Link to={ROUTES.SETTING}><button>Settings</button></Link>
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

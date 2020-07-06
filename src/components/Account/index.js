import React from "react";
import "./index.css";

import SignOutButton from "../SignOut";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import Dropdown2 from "../Dropdown";
import accountImg from "../../img/account.svg";
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as firebase from 'firebase';



const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          {/* <h1> Welcome to your account page, {firebase.database().ref('/users/' + post.name).once('value').then(function(snapshot) {
    const username = (snapshot.val() && snapshot.val().username)})}</h1> */}
          <h1>Your Account: {authUser.email}</h1>
          <h3>{authUser.dorm} dorm!!</h3>
          {/* insert picture of dorm */}
          <h5>{authUser.points} points earned so far! Great job! </h5>

          <h5>Need to change your dorm or password?</h5>
          <ul>
              <li>
                  
                    <Link to={ROUTES.SETTING}>
                      <button className ="signout-btn" >
                        Account Settings
                    </button>
                    </Link>
                  
               </li>
          </ul>
          
        
          
          <SignOutButton className="signout-btn" />
          
          
        </div>    
           
        
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

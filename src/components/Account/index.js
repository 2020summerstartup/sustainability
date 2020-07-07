import React from "react";
import "./index.css";
// import "././index.css";
import { Link } from "react-router-dom";
import southdorm from "./southdorm.jpg";

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
        <div class="base-container">

          <div class="wrapper1">
            Welcome, *insert username*{authUser.username}! 
            *insert profile pic*
          </div> 
          <div class="wrapper2">
            <div>   
              <div>
              You've earned 
              </div>  
              <div>
              ______ Points {authUser.points},
              </div> 
              <div>
              way to go!</div>    
              
            </div>
            <div>
            You're representing ______ {authUser.dorm} dorm
            
            </div>

            <div>
              Your dorm is in ____ place!
            </div>
            <div>
            <img src = {southdorm} />
            </div>
            <div class="wrapper3">
            <div>
              Account info:
            </div>
            <div>
              Email address: {authUser.email}
            </div>
            <div>
              Need to change dorms or change your password?
            </div>

            <div>
            <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
            </div>
          </div>
          {/* <div class="wrapper3">
            <div>
              Account info:
            </div>
            <div>
              Email address: *insert user email*
            </div>
            <div>
              Need to change dorms or change your password?
            </div>

            <div>
            <Link to={ROUTES.SETTING}><button className="button">Settings</button></Link>
            </div> */}
        
              




            
          </div>
        {/* <div className="grid"> </div>
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
         
          
          <div class = "wrapper">
            
          <div class="box">box1</div>
          <div class="box">box2</div>
          <div class="box">box3</div>
          <div class="box">box4</div>
           */}
          <div class="bottom">
            <SignOutButton />
          </div>
           </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

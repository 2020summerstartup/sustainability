import React from 'react';
import welcomeImg from "../../img/welcome.svg";
 
const LandingPage = () => (
  <div className="base-container">
    <h1>Hello future friend!</h1>
    <div className="image">
      <img src={welcomeImg} />
    </div>
    <h3>Hey you should sign up to use our awesome app! :)</h3>
  </div>
);
 
export default LandingPage;
import React from "react";
import welcomeImg from "../../img/welcome.svg";

const LandingPage = () => (
  <div className="base-container">
    <h1>Hello future friend!</h1>
    <div className="image">
      <img alt="" src={welcomeImg} />
    </div>
    <h3>Hey you should sign up to use our awesome app! :)</h3>
    <h3>Here's just a few reasons why: </h3>
    <ul>
      <li>It's made by the coolest people ever! 😎</li>
      <li>You want to be more sustainable! 🌎</li>
      <li>You have competitive fire within you! 🔥</li>
      <li>You don't want to let your dorm down. 🏫</li>
    </ul>
  </div>
);

export default LandingPage;

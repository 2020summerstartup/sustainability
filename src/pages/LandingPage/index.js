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
    <li>Our app is made by the coolest people ever!&nbsp;
        <span role="img" aria-label="sunglasses">
          😎
        </span>
      </li>
      <li>You want to be more sustainable!&nbsp;
        <span role="img" aria-label="earth">
          🌎
        </span>
      </li>
      <li>You have competitive fire within you!&nbsp;
        <span role="img" aria-label="earth">
        🔥
        </span>
      </li>
      <li>You don't want to let your dorm down.&nbsp;
        <span role="img" aria-label="earth">
          🏫
        </span>
      </li>
    </ul>
  </div>
);

export default LandingPage;

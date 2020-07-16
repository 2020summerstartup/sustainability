import React from "react";
import offlineImg from "../../img/offline.svg";

const OfflinePage = () => (
  <div className="base-container">
    <h1>Oops! Sorry you're offline.</h1>
    <div className="image">
      <img alt="you're offline" src={offlineImg} />
    </div>
    <h3>Please come back when you have connection! :)</h3>
    <h3>Here's why you should come back later:</h3>
    <ul>
      <li>Our app is made by the coolest people ever! 😎</li>
      <li>You want to be more sustainable! 🌎</li>
      <li>You have competitive fire within you! 🔥</li>
      <li>You don't want to let your dorm down. 🏫</li>
    </ul>
  </div>
);

export default OfflinePage;

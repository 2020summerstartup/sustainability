import React from "react"; // Used to also import "{ Component }", removed because it gave a warning
import Goal from "./Goal";
import Points from "./Points";
import Challenges from "./Challenges";
import Rewards from "./Rewards";

const InfoPage = () => (
  <div className="base-container">
    <h1 className="header">Info Page</h1>
      <Goal />
      <p></p>
      <Points />
      <p></p>
      <Challenges />
      <p></p>
      <Rewards />
  </div>
);

//const condition = authUser => !!authUser;

export default InfoPage;

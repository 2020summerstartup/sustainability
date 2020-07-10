import React from "react"; // Used to also import "{ Component }", removed because it gave a warning
import Goal from "./Goal";
import Points from "./Points";
import Challenges from "./Challenges";
import Rewards from "./Rewards";

const InfoPage = () => (
  <div className="base-container">
    <h1 className="header">Information</h1>
    {/* <center> */}
      <Goal />
      <p></p>
      <Points />
      <p></p>
      <Challenges />
      <p></p>
      <Rewards />
<<<<<<< HEAD
    {/* </center> */}
    <ContactForm />
=======
    </center>
>>>>>>> 45225df9ec3890d046177000078e9e4dc15dc1a6
  </div>
);

//const condition = authUser => !!authUser;

export default InfoPage;

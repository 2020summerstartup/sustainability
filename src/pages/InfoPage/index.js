import React from "react"; // Used to also import "{ Component }", removed because it gave a warning
import Goal from "./goal";
import Points from "./points";
import Challenges from "./challenges";
import Rewards from "./rewards";
import ContactForm from "./contactForm";

const InfoPage = () => (
  <div className="base-container">
    {/* <h1 className="header">Information</h1> */}
    <center>
      <Goal />
      <p></p>
      <Points />
      <p></p>
      <Challenges />
      <p></p>
      <Rewards />
    </center>
    <ContactForm />
  </div>
);

//const condition = authUser => !!authUser;

export default InfoPage;

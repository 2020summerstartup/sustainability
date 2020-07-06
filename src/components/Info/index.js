import React from "react"; // Used to also import "{ Component }", removed because it gave a warning
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';
// import { progressDeck } from "react-progress-deck";

// import { withAuthorization } from '../Session';
// import firebase from "../Firebase"

// import ProgressDeck from "../ProgressDeck";

const InfoPage = () => (
  <div className="base-container">
    <h1 className="header">Info Page</h1>
    <center>
      <h1>Goal/Purpose</h1>
      <p>
        The 2020 Summer Startup Team works with sustainability organizations at
        Mudd like ASHMC sustainability and Engineers of a Sustainable World to
        help promote more eco-friendly practices on our campus by providing
        real-life incentives.
      </p>

      <h1></h1>

      <h1>How to Participate & Earn Points</h1>
      <p>
        Sign up with your HMC gmail! Look on our actions page for sustainable
        practices that you can earn points for and hit the "BUZZ" button
        everytime you complete the action!
      </p>

      <h1></h1>

      <h1>Current Challenges</h1>
      <p>Coming soon... :)</p>
      
      <h1></h1>

      <h1>Current Rewards</h1>
      <p>Coming soon... :)</p>
    </center>
    {/* <ProgressDeck
      imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
      description="Check in 5 different place in Yosemite"
      title="Yosemite Ninjia"
      size={350}
      percentage={0.5}
    /> */}
    
  </div>
);

//const condition = authUser => !!authUser;

export default InfoPage;

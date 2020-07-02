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
    <h3>
      <center>
        I think we put sustainability info here? Like how the user's sustainible
        actions are actually impacting the planet, what they can do to be more
        sustainable, the most important actions for them to take right now.
      </center>
    </h3>
    {/* <ProgressDeck
      imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
      description="Check in 5 different place in Yosemite"
      title="Yosemite Ninjia"
      size={350}
      percentage={0.5}
    /> */}
    ;
  </div>
);

//const condition = authUser => !!authUser;

export default InfoPage;

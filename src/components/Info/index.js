import React from 'react'; // Used to also import "{ Component }", removed because it gave a warning
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';
 
// import { withAuthorization } from '../Session';
// import firebase from "../Firebase"

// import ProgressDeck from './ProgressDeck';
 
const InfoPage = () => (
    <div className="base-container">
    <h1 className="header">Info Page</h1>
    <h3><center>
      I think we put sustainability info here? Like how the user's sustainible actions
      are actually impacting the planet, what they can do to be more sustainable, the
      most important actions for them to take right now.
      </center>
    </h3>
    {/* <ProgressDeck /> */}
  </div>
);

//const condition = authUser => !!authUser;
 
export default InfoPage;
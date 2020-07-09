import React from 'react';
//  import * as firebase from 'firebase';
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signout-btn button">
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
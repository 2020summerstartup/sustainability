import React from "react";
//  import * as firebase from 'firebase';
import { withFirebase } from "../../services/Firebase";

import Button from "@material-ui/core/Button";

const SignOutButton = ({ firebase }) => (
  <Button
    onClick={firebase.doSignOut}
    variant="contained"
    color="primary"
    className="signout-btn button"
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);

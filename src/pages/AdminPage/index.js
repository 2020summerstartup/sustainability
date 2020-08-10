import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import { compose } from "recompose";

import Typography from "@material-ui/core/Typography";
import firebase from 'firebase/app';

import { withFirebase, getUser } from "../../services/Firebase";
import * as ROLES from '../../constants/roles';

import Container from "@material-ui/core/Container";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@material-ui/core/Button";

const getEmail = () => {
  var newEmail = prompt("Enter the new admin's email address");
  // Prompt returns null if the user hits cancel. So only attempt to set the admin if an email address was entered.
  if (newEmail) {
    setAdmin(newEmail);
  }
}

const setAdmin = (email) => {
  toast.configure(); // Configure for toast messages
  // Check if the email address is associated with any of the current users.
  getUser(email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.data()) {
        console.log('docsnapshot data', docSnapshot.data());
        toast.info('A user with that email adress exists. Good first step!');
        // Now we want to see if this user is already an admin. 
        // Following two lines get the user id of the currenlty logged in user
        var userId = firebase.auth().currentUser.uid;
        console.log('userID', userId);
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
          var role = (snapshot.val() && snapshot.val().roles) || 'Anonymous';
          console.log('role', role);
        });
      } else {
        toast.error("That email address isn't associated with any user!");
      }
    },
  );
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// }
// );
};

// Goole form for Admins to fill out only
function AdminPage() {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <Container maxWidth="xs" style={{ margin: "auto", padding: 0 }}>
            {/* The google form for admins to fill out to add challenges */}
            <iframe
              title="challengeForm"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfHIX4V2KaPP8bgbmpl79E93rBVmr6Q6KH5Yu4nR7bpAiXqAg/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
            <center>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  getEmail()
                }}
              >
                Add another admin
              </Button>
            </center>
            <br />
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
              Want to remove a challenge? Email the developers at &nbsp;
              <a
                href="mailto:suscompetitionteam@gmail.com"
                style={{ }}
              >
                suscompetitionteam@gmail.com
              </a>
              &nbsp;(or by completing the "contact us" form in settings), and we'll
              get to it as soon as we can!
            </Typography>
          </Container>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
}


const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase)(AdminPage);

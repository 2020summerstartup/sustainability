import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import { compose } from "recompose";

import Typography from "@material-ui/core/Typography";
// import firebase from 'firebase/app';

import { withFirebase, getUserDocRef } from "../../services/Firebase";
import * as ROLES from '../../constants/roles';

import Container from "@material-ui/core/Container";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@material-ui/core/Button";
import firebase from 'firebase/app';

const getEmail = () => {
  var newEmail = prompt("Enter the new admin's email address");
  // Prompt returns null if the user hits cancel. So only attempt to set the admin if an email address was entered.
  if (newEmail) {
    setAdmin(newEmail);
  }
}

// Function to set a new user as an admin. Accepts user's email as a parameter.
const setAdmin = (email) => {
  email = email.toLowerCase(); // Make email all lower case (how the emails should all be stored in firebase)
  toast.configure(); // Configure for toast messages
  getUserDocRef(email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.data()) { // Code in this if statement runs if the entered email is associated with a current user
        var data = docSnapshot.data();
        var userId = data.UserUID;
        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
          var roles = (snapshot.val() && snapshot.val().roles) || 'Anonymous'; // get the roles folder of the user
          if (roles.ADMIN) { // If roles.ADMIN is defined it means the user is already an admin
            toast.warning(email.concat(' is already an admin!'));
          } else { // This else statement runs if the user is not an admin
            var confirmSetAdmin = window.confirm("Are you sure you want to make " + email + ' an admin?');
            if (confirmSetAdmin) {
              // Set ADMIN in the roles folder to have a value of ADMIN
              firebase.database().ref('users/' + userId + '/roles').set({ // TODO: change to update instead of set
                ADMIN: 'ADMIN',
              });
              toast.info(email.concat(' is now an admin!'));
            } else {
              toast.warning('Okay, ' + email + ' will not be made an admin');
            }
          }
        });
      } else {
        toast.error("That email address isn't associated with any user!");
      } // if statement
    }, // docSnapshot arrow function
  ); // onSnapshot
}; // setAdmin function

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
                style={{}}
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

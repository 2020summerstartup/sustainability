import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Paper from "@material-ui/core/Paper";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {

  toast.configure(); // Configure to be able to display goasts to user later in the file

  var challengeData2=[
    {
        "title": "Recycling",
        "info": "further description of the challenge here. (Maybe double points for recycling or something)"
    },
    {
        "title": "Decrease Energy Use",
        "info": "here's some more info about the second thing"
    }
]

const getInfo = () => {
  var enteredTitle = prompt('Choose a title for your new challenge');
  var enteredInfo = prompt('Enter an explanation of the new challenge');
  // var confirmationMessage = 
  var confirmed = window.confirm('Here is your new challenge: Title: '.concat(enteredTitle, ' Info: ', enteredInfo, ' Are you sure you want to add this challenge?')); // , 'Info:', enteredInfo, 'Are you sure you want to add this challenge?'
  if (confirmed) {
    console.log('user confirmed');
    toast.success('New challenge will be added! (not actually we need to get it working lol)', { autoClose: 5000 }); // It's "success" so that the window is green
  } else {
    console.log('user aborted');
    toast.error('Challenge was not added', { autoClose: 5000 }); // It's "error" so that the window is red
  }
  // console.log("ChallengeData2 before change", challengeData2);
  console.log('new title:', enteredTitle);
  console.log('new info:', enteredInfo);
  challengeData2[challengeData2.length] = {"title": enteredTitle};
  // console.log("Changed ChallengeData2", challengeData2);
}

  return (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Paper>
          <div className="base-container">
              <center>THIS IS THE ADMIN PAGE.</center>
              <button onClick={() => getInfo()}>Add a new challenge</button>
          </div>
        </Paper>
      )}
    </AuthUserContext.Consumer>
  </div>
  )
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);

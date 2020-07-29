import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Paper from "@material-ui/core/Paper";

function AdminPage() {

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
  var retVal = prompt('Choose a title for your new challenge');
  console.log("ChallengeData2 before change", challengeData2);
  console.log('you entered', retVal);
  challengeData2[challengeData2.length] = {"title": retVal};
  console.log("Changed ChallengeData2", challengeData2);
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

import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import Paper from "@material-ui/core/Paper";
import ChallengeData from '../CompetePage/challengeData.json';

function AdminPage() {

  // Text to be displayed on the admin page
  return (
    <div>
      <AuthUserContext>
        {(authUser) => (
          <Paper>
            <div className="base-container">
                <center>THIS IS THE ADMIN PAGE.</center>
            </div>
          </Paper>
        )}
      </AuthUserContext>
    </div>
  ); // End of return statement
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);

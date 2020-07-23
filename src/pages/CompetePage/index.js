import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import Leaderboard from "./leaderboard.js";
import Challenges from "./challenges.js";

import Paper from "@material-ui/core/Paper";

const CompetePage = () => (
  <div>
    <AuthUserContext>
      {(authUser) => (
        <Paper>
          <div className="base-container">
            <Leaderboard />
            <Challenges />
          </div>
        </Paper>
      )}
    </AuthUserContext>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CompetePage);

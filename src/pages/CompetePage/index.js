import React from "react"; // No longer imports component because it wasn't used

// import { withFirebase } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Leaderboard from "./leaderboard.js";

const CompetePage = () => (
  <div>
    <AuthUserContext>
      {(authUser) => (
        <div className="base-container">
          <Leaderboard />
        </div>
      )}
    </AuthUserContext>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CompetePage);

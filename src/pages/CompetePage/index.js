import React from "react"; // No longer imports component because it wasn't used

// import { withFirebase } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Leaderboard from "./leaderboard.js";

const CompetePage = () => (
  <div>
    <AuthUserContext>
      {(authUser) => (
        <div class="base-container">
          {/* <h1>
            Competitions and Rankings
            <span role="img" aria-label="Trophy">
              🏆
            </span>
          </h1>
          <center>New competitions coming soon...</center>
          
          <h3>Leaderboard</h3>
          <p>See your dorm's ranking below! :)</p> */}
          <Leaderboard />
        </div>
      )}
    </AuthUserContext>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CompetePage);

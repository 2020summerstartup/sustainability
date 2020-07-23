import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Paper from "@material-ui/core/Paper";

const AdminPage = () => (
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
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);

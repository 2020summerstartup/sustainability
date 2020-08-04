import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";

import Paper from "@material-ui/core/Paper";

import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <Paper>
            <div className="base-container">
              <center>THIS IS THE ADMIN PAGE.</center>
              {/* The google form for admins to fill out to add challenges */}
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHIX4V2KaPP8bgbmpl79E93rBVmr6Q6KH5Yu4nR7bpAiXqAg/viewform?embedded=true" width="1000rem" height="800rem" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </Paper>
        )}
      </AuthUserContext.Consumer>
    </div>
  )
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);

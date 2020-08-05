import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import { compose } from 'recompose';

import { withFirebase } from "../../services/Firebase";
import * as ROLES from '../../constants/roles';

// import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import "react-toastify/dist/ReactToastify.css";

// import { Admin } from 'react-admin';

function AdminPage() {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          // <Paper>
            <Container maxWidth="xs" style={{ margin: "auto" }}>
              {/* <div className="base-container"> */}
                {/* The google form for admins to fill out to add challenges */}
                <iframe title="challengeForm" src="https://docs.google.com/forms/d/e/1FAIpQLSfHIX4V2KaPP8bgbmpl79E93rBVmr6Q6KH5Yu4nR7bpAiXqAg/viewform?embedded=true" width="1000rem" height="800rem" frameBorder="0" margin="auto" style={{ maxWidth: "inherit" }}>Loading…</iframe>
                Want to remove a challenge? Email the developers at suscompetitionteam@gmail.com (or by completing the "contact us" form in settings), and we'll get to it as soon as we can!
              {/* </div> */}
            </Container >
          // </Paper>
        )}
      </AuthUserContext.Consumer>
    </div>
  )
}

// const condition = (authUser) => !!authUser;

// export default withAuthorization(condition)(AdminPage);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
 
export default compose(
  withAuthorization(condition),
  withFirebase,
)(AdminPage);

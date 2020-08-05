import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import { compose } from "recompose";

import { withFirebase } from "../../services/Firebase";
import * as ROLES from "../../constants/roles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "react-toastify/dist/ReactToastify.css";

// import { Admin } from 'react-admin';

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
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
              Want to remove a challenge? Email the developers at &nbsp;
              <a
                href="mailto:suscompetitionteam@gmail.com"
                style={{ }}
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

// const condition = (authUser) => !!authUser;

// export default withAuthorization(condition)(AdminPage);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase)(AdminPage);

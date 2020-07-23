import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import Leaderboard from "./leaderboard.js";

import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const CompetePage = () => (
  <Paper>
    <AuthUserContext>
      {(authUser) => (
          <div className="base-container">
            {/* <Compete loading /> */}
            {/* <Compete /> */}
            <Leaderboard />
          </div>
      )}
    </AuthUserContext>
  </Paper>
);

// function Compete(props) {
//   const { loading = false } = props;

//   return (
//     // <Typography variant="h1">
//     <div>
//       {loading ? <Skeleton /> : <Leaderboard />}
//     </div>
//     // </Typography>
//   );
// }

// Compete.propTypes = {
//   loading: PropTypes.bool,
// };


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CompetePage);

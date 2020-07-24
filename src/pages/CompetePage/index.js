import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import CompeteTabs from "./CompeteTabs";

import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const CompetePage = () => (
    <AuthUserContext>
      {(authUser) => (
          <div className="base-container">
            <CompeteTabs />
          </div>
      )}
    </AuthUserContext>
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

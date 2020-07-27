import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import CompeteTabs from "./CompeteTabs";

const CompetePage = () => (
    <AuthUserContext>
      {(authUser) => (
        <CompeteTabs />
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

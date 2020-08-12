import React from "react"; // No longer imports component because it wasn't used
import { AuthUserContext, withAuthorization } from "../../services/Session";
import CompeteTabs from "./CompeteTabs";
import AddToHomeScreenModal from "./addToHomeScreenModal";

// Main Component - displays tabs with Leaderboard and Challenges
const CompetePage = (props) => (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <>
          <AddToHomeScreenModal />
          <CompeteTabs props={props}/>
        </>
      )}
    </AuthUserContext.Consumer>
);
//----------------Can whoever wrote this take a look?-----------------------//
// Do we still need this? It's commented out -Amy
// I have no idea whaat this is -Kobe
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

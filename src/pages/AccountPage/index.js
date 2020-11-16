import React, { useContext } from "react";
import { useSelector } from 'react-redux';
import leaderBoardUpdate, {
  assignRanking,
} from "../CompetePage/leaderBoardUpdate";
import { getUserDocRef, getDorm } from "../../services/Firebase";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import AccountTabs from "./AccountTabs";

// Set's user's dorm from firestore data
function assignDorm(data) {
  if (data.userDorm === "") {
    alert("If you want to contribute to your dorm, choose your dorm in settings!");
  } else {
    // localStorage.setItem("dorm", data.userDorm);
  }
}

// ACCOUNTPAGE
const AccountPage = props => {
  leaderBoardUpdate();

  const authContext = useContext(AuthUserContext);
  const reduxDorm = useSelector(state => state.user.dorm)

  getUserDocRef(authContext.email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.exists) {
        assignDorm(docSnapshot.data());
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  // Retrieves user's dorm from firebase, otherwise throws an error
  // Assigns ranking for mudd page using dorm name
  var dormName = reduxDorm;
  if (dormName && dormName !== ""){
    getDorm()
    .doc(dormName)
    .onSnapshot(
      (docSnapshot) => {
        assignRanking(docSnapshot.data());
      },
      (error) => {
        console.error("Error: ", error);
      }
    );
  }
  
  return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <AccountTabs props={props}/>
        )}
      </AuthUserContext.Consumer>
  );
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);

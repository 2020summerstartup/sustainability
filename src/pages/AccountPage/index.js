import React, { useContext } from "react";
import leaderBoardUpdate, {
  assignRanking,
} from "../CompetePage/leaderBoardUpdate.js";
import { getUser, getDorm } from "../../services/Firebase";
import { AuthUserContext, withAuthorization } from "../../services/Session";
import AccountTabs from "./AccountTabs";

function assignDorm(data) {
  if (data.userDorm === "") {
    alert("If you want to contribute to your dorm, choose your dorm in settings!");
  } else {
    localStorage.setItem("dorm", data.userDorm);
  }
}

function AccountPage() {
  leaderBoardUpdate();

  const authContext = useContext(AuthUserContext);

  getUser(authContext.email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.exists) {
        assignDorm(docSnapshot.data());
      } else {
        console.log(null);
        // alert("Sorry, please choose your dorm in setting!");
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  getDorm()
    .doc(localStorage.getItem("dorm"))
    .onSnapshot(
      (docSnapshot) => {
        assignRanking(docSnapshot.data());
      },
      (error) => {
        console.error("Error: ", error);
      }
    );

  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <>
          <AccountTabs />
          </>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

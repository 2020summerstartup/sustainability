import React, { useContext } from "react";
import leaderBoardUpdate, {
  assignRanking,
} from "../CompetePage/leaderBoardUpdate";
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

function AccountPage(props) {
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

  var dormName = localStorage.getItem("dorm")
  if (dormName !== ""){
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
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <AccountTabs props={props}/>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);

import React from "react";
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import DormSelect from "../../../components/DormSelect";
import changedorm from "../../../img/changedorm.svg";

// Authorized Page for signed in users to change dorm, inside Settings Drawer
const ChangeDorm = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="base-container">
          <h2>Need to change your dorm?</h2>
          <div className="image">
            <img alt="your account" src={changedorm} />
          </div>
          <h3>Change your dorm here!</h3>
          <DormSelect />
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ChangeDorm);

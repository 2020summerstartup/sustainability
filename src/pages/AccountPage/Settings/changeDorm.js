import React from 'react';
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import DormSelect from "../../../components/DormSelect";
import changedorm from "../../../img/changedorm.svg";

const ChangeDorm = () => (
    <div>
    <AuthUserContext>
      {(authUser) => (
    <div class="base-container">
        <h1>Need to change your dorm?</h1>
        <div className="image">
          <img alt="your account" src={changedorm} />
        </div>
        <h3>Change your dorm here!</h3>
        <DormSelect />
    </div>
    )}
      </AuthUserContext>
      </div>
)

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ChangeDorm);

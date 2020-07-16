import React from 'react';
import PasswordChangeForm from './index.js';
import { AuthUserContext, withAuthorization } from "../Session";
import DormSelect from "../DormSelect";
import changedorm from "../../img/changedorm.svg";

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

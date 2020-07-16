import React from 'react';
import PasswordChangeForm from './index.js';
import { AuthUserContext, withAuthorization } from "../Session";
import accountImg from "../../img/account.svg";

const ChangePW = () => (
    <div>
    <AuthUserContext>
      {(authUser) => (
    <div class="base-container">
        <h1>Want to change your password?</h1>
        <div className="image">
          <img alt="change your password" src={accountImg} />
        </div>
        <PasswordChangeForm/>
    </div>
      )}
      </AuthUserContext>
      </div>
)

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ChangePW);

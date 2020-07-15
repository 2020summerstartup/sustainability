import React from 'react';
import PasswordChangeForm from './index.js';
import { AuthUserContext, withAuthorization } from "../Session";

const ChangePage = () => (
    <div>
    <AuthUserContext>
      {(authUser) => (
    <div class="base-container">
        <div>Want to change your password?</div>
        <PasswordChangeForm/>
    </div>
      )}
      </AuthUserContext>
      </div>
)

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ChangePage);

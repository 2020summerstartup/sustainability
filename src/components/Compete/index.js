import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthorization } from "../Session";

const CompetePage = () => (
    <div>
    <AuthUserContext>
    {(authUser) => (
      <div class="base-container">
        <h1>Competition! Yay!<span role="img" aria-label="Trophy">🏆</span></h1>
        <center>New competitions coming soon...</center>
      </div>
    )}
    </AuthUserContext>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CompetePage);

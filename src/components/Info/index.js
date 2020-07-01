import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { withAuthorization } from '../Session';
import firebase from "../Firebase"
 
const InfoPage = () => (
    <div className="base-container">
    <h1 className="header">Info Page</h1>
  </div>
);

const condition = authUser => !!authUser;
 
export default InfoPage;
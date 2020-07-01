import React, {useEffect} from 'react';
import Counter from './counter';
 
import { withAuthorization } from '../Session';
import firebase from "../Firebase"
 
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1>Home Page</h1>
    <h3>Home Sweet Home</h3>
    <p>🍔♻️</p>
    <h2>Log your sustainable actions below!</h2>
    <Counter/>
    <h4>You're doing great! Keep it up ♻️</h4>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
import React from 'react';
import Counter from './counter';
 
import { withAuthorization } from '../Session';
 
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1>Home Page</h1>
    <h3>Home Sweet Home</h3>
    <span role="img" aria-label="recycle">♻️</span>
    <h3>Recycle Water Bottle</h3>
    <center><Counter/></center>
    <h3>Walk to Claremont Village</h3>
    <center><Counter/></center>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
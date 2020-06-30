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
    <span role="img" aria-label="burger, recycle">🍔 ♻️</span>
    <h2>Recycle Water Bottle</h2>
    <Counter/>
    <h3>Walk to Claremont Village</h3>
    <Counter />
    <p>Eventually, log sustainable actions here.</p>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
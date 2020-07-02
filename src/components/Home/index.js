import React from 'react';
import Counter from './counter';
 
import { withAuthorization } from '../Session';
 
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1>Home Sweet Home</h1>
    <h3>Track your sustainable actions here!</h3>
    <span role="img" aria-label="recycle">♻️</span>
    You have earned a total of XXX points for your sustainable actions. Thank you!
    <h3><b>Recycle Water Bottle</b></h3>
    <center><Counter susAction={'waterBottle'}/></center>
    <h3><b>Walk to Claremont Village</b></h3>
    <p>(Just not during the first two weeks on campus!)</p>
    <center><Counter susAction={'cmontWalk'}/></center>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
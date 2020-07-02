import React from 'react';
import Counter from './counter';
 
import { withAuthorization } from '../Session';

// Text to display on the homepage
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1>Home Sweet Home</h1>
    <h3>Track your sustainable actions here!</h3>
    <span role="img" aria-label="recycle">♻️</span>
    {/* Total points earned. */}
    You have earned a total of { parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk')) } points for your sustainable actions. Thank you!
    {/* Individual sustainable actions. */}
    <h3><b>Recycle Water Bottle</b></h3>
    <center><Counter susAction={'waterBottle'}/></center>
    <h3><b>Walk to Claremont Village</b></h3>
    (Just not during the first two weeks on campus!)
    <center><Counter susAction={'cmontWalk'}/></center>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
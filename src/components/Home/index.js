import React, { useState } from "react";
import Counter from './counter';
import ActionCard from "../ActionCard";

import CountUp from 'react-countup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withAuthorization } from '../Session';

toast.configure()
const notify = () => {
  toast('You are amazing!', {autoClose: 8000})
}
// Text to display on the homepage
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1>Home Sweet Home</h1>
    <h3>You have earned a total of&nbsp;   
       {<CountUp
        start={0}
        end={100}
        duration={5}>
      </CountUp>} points! &nbsp;
    <button onClick={notify}>Click me!</button>
    </h3>
    <ActionCard />
    <h3>Track your sustainable actions here!</h3>
    <span role="img" aria-label="recycle">♻️</span>
    {/* Total points earned. TODO: Make this update automatically, instead of only on
    page reload. I'll deal with this later (I want to update this whole thing to use the new counter first). */}
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

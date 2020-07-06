import React, { useState } from "react";
import Counter from './counter';
import ActionCard from "../ActionCard";

import { withAuthorization } from '../Session';

// Initialize total points variable
// TODO: I want this to update without us having to manually add every sus action. Not sure how...
var total = parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk'))
+ parseInt(localStorage.getItem('reuseStraw')) + parseInt(localStorage.getItem('reuseGroceryBag'))
+ parseInt(localStorage.getItem('frmersMarket')) + parseInt(localStorage.getItem('rebrewTea'))
+ parseInt(localStorage.getItem('noFoodWaste')) + parseInt(localStorage.getItem('meatlessMon'))
+ parseInt(localStorage.getItem('ecoClean'));

// The following commented out code didn't work, but I want to keep the record of it for now
// to understand what I tried and what went wrong. Talk to me (Katie) if you want any clarificaiton. :)
// // If the counter changes (i.e. if the buzz or undo button is pressed), call refreshPage function
// Counter.onChange = refreshPage();

// // Refresh the page
// function refreshPage() {
//   console.log('refreshPage func ran');
//   console.log('total val', total);
//   console.log('sum value', parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk')));
//   if (total != parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk'))) {
//     console.log('if ran');
//     total = parseInt(localStorage.getItem('waterBottle')) + parseInt(localStorage.getItem('cmontWalk'));
//     document.location.reload(true);
//   } else {
//     console.log('else ran');
//   }
//   // Currently the above if statement never runs, so the computer thinks that testParam is always equal to 
//   // the actual local storage values. but the local storage should be getting changed, and testParam definitely
//   // isn't updated.
//   // And the function is basically running full time so that shouldn't be the issue

//   // update at 2:43: I think the issue is that the function isn't actually running. Which I guess kind of makes
//   // sense because this entire file runs once and then it stops until reload. So i probably have to move all of this
//   // code into counter or something.
// }

// Text to display on the homepage
const HomePage = () => (
  <div className="base-container">
    <script>
      var user = 
    </script>
    <h1><b>Track sustainable actions here!</b></h1>
    You have earned a total of <b>{ total }</b> points for your sustainable actions. Thank you!
    {/* Emoji that we probably shouldn't include: <span role="img" aria-label="recycle">♻️</span> */}
    <ActionCard />
    <h1> </h1>
    {/* Individual sustainable actions. */}
    {/* <h3><b>Recycle Water Bottle</b></h3>
    <center><Counter susAction={'waterBottle'}/></center>
    <h3><b>Walk to Claremont Village</b></h3>
    <center><Counter susAction={'cmontWalk'}/></center> */}
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
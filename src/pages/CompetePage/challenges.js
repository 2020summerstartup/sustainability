import React from "react";
import ChallengeData from './challengeData.json';

function challenges() {
  // Just hardcoding in a bunch of colors so that we'll never have more simultaneous challenges than possible colors.
  let colors = ["#24a113", "#39AA2A", "#4FB342", "#65BD59", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77", "#7fbf77"];

  var challengeInfo = "";
  const setChallengeInfo = () => {
    for (const key in ChallengeData) {
      // Loop over every action in ActionData
      challengeInfo = (
        <>
          {challengeInfo}
          <div
            style={{
              backgroundColor: colors[key],
              color: "white",
              padding: "1.5rem",
              borderRadius: "10px",
              margin: "0 0.5rem",
              maxWidth: "600px",
              marginTop: "2rem",
            }}
          >
            <b>Challenge {parseInt(key)+1}: {ChallengeData[key].title}</b>
            <br/>
            <p align='left'>&nbsp;&nbsp;&nbsp;&nbsp;{ChallengeData[key].info}</p>
          </div>
        </>
      );
    }
    // Append more info
    challengeInfo = (
      <>
        {challengeInfo}
        <p><b>Check back often for new challenges!</b></p>
      </>
    );
  }; // setChallengeInfo

  // Call the function immediately so that it runs before the return statement
  setChallengeInfo();
  return (
    <div>
      <h1>
        Current Challenges
      </h1>
      {challengeInfo}
    </div>
  )
}

export default challenges;
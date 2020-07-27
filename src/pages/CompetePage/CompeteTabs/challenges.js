import React from "react";
import Reward from "react-rewards";
import ChallengeData from "../challengeData.json";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Just hardcoding in a bunch of colors so that we'll never have more simultaneous challenges than possible colors.
let colors = [
  "#24a113",
  "#39AA2A",
  "#4FB342",
  "#65BD59",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
  "#7fbf77",
];

var challengeInfo = "";
const setChallengeInfo = () => {
  for (const key in ChallengeData) {
    // Loop over every challenge in ChallengeData
    challengeInfo = (
      <>
        {challengeInfo}
        <div
          style={{
            backgroundColor: colors[key],
            color: "white",
            padding: "1.5rem",
            borderRadius: "10px",
            margin: "0 0",
            maxWidth: "600px",
            display: "inline-block",
            marginTop: "2rem",
          }}
        >
          <b>
            Challenge {parseInt(key) + 1}: {ChallengeData[key].title}
          </b>
          <br />
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{ChallengeData[key].info}</p>
        </div>
      </>
    );
  }
  // Append more info
  challengeInfo = <>{challengeInfo}</>;
}; // setChallengeInfo

// Call the function immediately so that it runs before the return statement
setChallengeInfo();

class Challenges extends React.Component {

  render() {
    return (
      <div>
        <Typography variant="h5">Current Challenges</Typography>
        {challengeInfo}
        <p> </p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="emoji"
          config={{
            springAnimation: true,
            elementCount: 100,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.reward.rewardMe()}
          >
            Start a Challenge
          </Button>
        </Reward>
        <p> </p>
        <Typography variant="body1">Check back often for new challenges!</Typography>
      </div>
    );
  }
}

export default Challenges;
